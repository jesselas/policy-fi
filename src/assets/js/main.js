/* ==========================================================================
   policy.fi — Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initExternalLinks();
  initAccordions();
  initPubToggles();
  initRecentResearchCards();
  initRecentResearchEqualHeight();
  initCitationCopy();
  // The AI page and the Research page share the same library markup/ids, so run
  // exactly one library controller per page: the research variant when research
  // cards are present, the AI variant otherwise (a no-op on pages with neither).
  if (document.querySelector('.research-card')) {
    initResearchLibrary();
  } else {
    initLibrary();
  }
  initMobileNav();
  initThemeToggle();
  initWebMCP();
});

/* --- WebMCP: expose site tools to in-browser AI agents ---
   Feature-detected against navigator.modelContext; a no-op in browsers/agents
   that don't implement WebMCP. Registers read-only tools an agent can call to
   navigate the site and search the AI-for-economists library. */
function initWebMCP() {
  try {
    const mc = navigator.modelContext;
    if (!mc || typeof mc.provideContext !== 'function') return;

    const text = (obj) => ({ content: [{ type: 'text', text: JSON.stringify(obj) }] });

    const tools = [
      {
        name: 'list_site_pages',
        description: "List the main pages of Jesse Lastunen's site (policy.fi) with their URLs.",
        inputSchema: { type: 'object', properties: {}, additionalProperties: false },
        execute: async () => text([
          { title: 'Home', url: 'https://policy.fi/' },
          { title: 'Research (publications)', url: 'https://policy.fi/research/' },
          { title: 'SOUTHMOD', url: 'https://policy.fi/southmod/' },
          { title: 'AI for Economists (curated library)', url: 'https://policy.fi/ai-econ/' },
        ]),
      },
    ];

    // Only offer the library search where the resource cards are present.
    const cards = Array.from(document.querySelectorAll('.resource-card'));
    if (cards.length) {
      tools.push({
        name: 'search_ai_econ_library',
        description: 'Search the curated "AI for Economists" library (research papers, courses, coding guides, tools, commentary). Returns matching resources with title, author, category and URL.',
        inputSchema: {
          type: 'object',
          properties: { query: { type: 'string', description: 'Keywords to search titles, authors, descriptions and tags.' } },
          required: ['query'],
          additionalProperties: false,
        },
        execute: async ({ query }) => {
          const q = String(query || '').toLowerCase().trim();
          const results = cards
            .filter((c) => !q || (c.dataset.searchable || '').includes(q))
            .slice(0, 25)
            .map((c) => ({
              title: (c.querySelector('.card-title') || {}).textContent?.trim() || '',
              author: (c.querySelector('.card-meta') || {}).textContent?.trim() || null,
              category: c.dataset.category || null,
              url: (c.querySelector('.card-title a') || {}).href || null,
            }));
          return text({ count: results.length, results });
        },
      });
    }

    mc.provideContext({ tools });
  } catch (e) {
    /* WebMCP unavailable or shape changed — ignore. */
  }
}

/* --- Utility: debounce --- */
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* --- External links open in new tab --- */
function initExternalLinks() {
  document.querySelectorAll('a[href^="http"]').forEach(a => {
    if (!a.hostname || a.hostname !== window.location.hostname) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    }
  });
}

/* --- Accordions --- */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = header.getAttribute('aria-expanded') === 'true';

      header.setAttribute('aria-expanded', !isOpen);
      content.classList.toggle('open', !isOpen);
    });

    // Keyboard support
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        header.click();
      }
    });
  });

  // Clicking the section's background area (not the header, not a resource card)
  // while the section is open closes it.
  document.querySelectorAll('.accordion-section').forEach(section => {
    const header = section.querySelector('.accordion-header');
    if (!header) return;
    section.addEventListener('click', (e) => {
      if (header.getAttribute('aria-expanded') !== 'true') return;
      if (e.target.closest('.accordion-header')) return;       // header handles itself
      if (e.target.closest('.resource-card')) return;          // leave cards alone
      if (e.target.closest('a, button, input, textarea, label, .tag')) return;
      header.click();
    });
  });

  // Set accessibility attributes; respect aria-expanded already set in HTML
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.setAttribute('tabindex', '0');
    header.setAttribute('role', 'button');
    // If no aria-expanded set, default to open
    if (!header.hasAttribute('aria-expanded')) {
      header.setAttribute('aria-expanded', 'true');
      const content = header.nextElementSibling;
      if (content) content.classList.add('open');
    } else if (header.getAttribute('aria-expanded') === 'true') {
      const content = header.nextElementSibling;
      if (content) content.classList.add('open');
    }
  });
}

/* --- Per-Publication Toggles (collapsed by default) --- */
function initPubToggles() {
  document.querySelectorAll('.pub-toggle').forEach(toggle => {
    // Start collapsed
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('tabindex', '0');
    toggle.setAttribute('role', 'button');

    toggle.addEventListener('click', () => {
      const details = toggle.nextElementSibling;
      if (!details) return;
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isOpen);
      details.classList.toggle('open', !isOpen);
    });

    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle.click();
      }
    });
  });
}

/* --- Recent Research cards: make the whole card a click target --- */
function initRecentResearchCards() {
  document.querySelectorAll('.recent-research-card').forEach(card => {
    const toggle = card.querySelector('.pub-toggle');
    if (!toggle) return;
    card.addEventListener('click', (e) => {
      // Ignore clicks on interactive children or on text meant to be selected.
      if (e.target.closest('a, button, input, textarea, label, .citation-text')) return;
      // The pub-toggle has its own handler already; don't double-fire.
      if (e.target.closest('.pub-toggle')) return;
      toggle.click();
    });
  });
}

/* --- Recent Research cards: equalise collapsed height of row-mates ---
   Pads each card's toggle header (not the card, and not the expandable
   details) up to the tallest header in its grid row, so collapsed boxes line
   up. Because it only touches the always-visible header, expanding one card
   never changes its neighbour. Re-runs on resize and once fonts have loaded. */
function initRecentResearchEqualHeight() {
  const grid = document.querySelector('.recent-research-grid');
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll('.recent-research-card'));
  if (cards.length < 2) return;

  const equalize = () => {
    const toggles = cards
      .map(card => card.querySelector('.pub-toggle'))
      .filter(Boolean);
    // Reset so we measure natural header heights and regroup rows cleanly.
    toggles.forEach(t => { t.style.removeProperty('--rr-collapsed-min-h'); });
    // Group cards by grid row (row-mates share the same offsetTop).
    const rows = new Map();
    cards.forEach(card => {
      const top = card.offsetTop;
      if (!rows.has(top)) rows.set(top, []);
      rows.get(top).push(card);
    });
    rows.forEach(rowCards => {
      const rowToggles = rowCards
        .map(card => card.querySelector('.pub-toggle'))
        .filter(Boolean);
      const max = rowToggles.reduce((m, t) => Math.max(m, t.offsetHeight), 0);
      // Set a floor for the collapsed height; CSS drops it to 0 when the card
      // is open (aria-expanded="true") so details keep standard spacing.
      rowToggles.forEach(t => { t.style.setProperty('--rr-collapsed-min-h', max + 'px'); });
    });
  };

  equalize();
  window.addEventListener('resize', debounce(equalize, 150));
  window.addEventListener('load', equalize);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(equalize);
  }
}

/* --- Mobile Navigation --- */
function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const header = document.querySelector('.site-header');

  if (!toggle || !links) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close menu when clicking a nav link
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu when tapping outside on mobile
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && !header.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      closeMenu();
      toggle.focus();
    }
  });

  // Close menu on resize to desktop
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (window.innerWidth > 768 && links.classList.contains('open')) {
        closeMenu();
      }
    }, 100);
  });

  // Swipe up to close menu on mobile
  let touchStartY = 0;
  let touchCurrentY = 0;

  links.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
    touchCurrentY = touchStartY;
  }, { passive: true });

  const bars = toggle.querySelectorAll('.nav-toggle-bar');

  function setBarProgress(t) {
    // t: 0 = X (open), 1 = hamburger (closed)
    if (bars.length < 3) return;
    const angle1 = 45 * (1 - t);
    const tx1 = 4 * (1 - t);
    const angle3 = -45 * (1 - t);
    bars[0].style.transition = 'none';
    bars[1].style.transition = 'none';
    bars[2].style.transition = 'none';
    bars[0].style.transform = 'rotate(' + angle1 + 'deg) translate(' + tx1 + 'px, ' + tx1 + 'px)';
    bars[1].style.opacity = t;
    bars[2].style.transform = 'rotate(' + angle3 + 'deg) translate(' + tx1 + 'px, ' + (-tx1) + 'px)';
  }

  function clearBarProgress() {
    bars.forEach(b => {
      b.style.transition = '';
      b.style.transform = '';
      b.style.opacity = '';
    });
  }

  links.addEventListener('touchmove', (e) => {
    touchCurrentY = e.touches[0].clientY;
    const diff = touchCurrentY - touchStartY;
    // Swiping up — slide menu up in real time
    if (diff < 0 && links.classList.contains('open')) {
      links.style.transform = 'translateY(' + diff + 'px)';
      links.style.opacity = Math.max(0, 1 + diff / 120);
      links.style.transition = 'none';
      // Animate hamburger icon proportionally (0 = X, 1 = bars)
      const progress = Math.min(1, Math.max(0, -diff / 50));
      setBarProgress(progress);
    }
  }, { passive: true });

  links.addEventListener('touchend', () => {
    const diff = touchCurrentY - touchStartY;
    links.style.transition = '';
    links.style.transform = '';
    links.style.opacity = '';
    clearBarProgress();
    // If swiped up more than 50px, close
    if (diff < -50 && links.classList.contains('open')) {
      closeMenu();
    } else if (diff > 50 && !links.classList.contains('open')) {
      // Swipe down on closed menu area — open (handled by toggle)
    }
  }, { passive: true });

  function closeMenu() {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

/* --- Citation Copy Buttons --- */
function initCitationCopy() {
  document.querySelectorAll('.citation-copy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const format = btn.dataset.format;
      let text = '';

      if (format === 'bibtex') {
        try {
          const data = JSON.parse(btn.dataset.bibtex);
          const key = data.authors.split(',')[0].trim().split(' ').pop().toLowerCase() + data.year;
          text = '@article{' + key + ',\n';
          text += '  author = {' + data.authors + '},\n';
          text += '  title = {' + data.title + '},\n';
          text += '  year = {' + data.year + '},\n';
          text += '  journal = {' + data.venue + '}';
          if (data.url) text += ',\n  url = {' + data.url + '}';
          text += '\n}';
        } catch (err) {
          text = 'Error generating BibTeX';
        }
      } else {
        // Plain citation
        const citeEl = document.getElementById(btn.dataset.citeId);
        text = citeEl ? citeEl.textContent.trim() : '';
      }

      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 1500);
      });
    });
  });
}

/* --- Theme toggle (light/dark) --- */
function initThemeToggle() {
  const btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const root = document.documentElement;
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    root.style.colorScheme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    // Notify same-origin iframes (e.g. the SOUTHMOD map) so they recolor instantly.
    document.querySelectorAll('iframe').forEach(f => {
      try { f.contentWindow.postMessage({ type: 'theme', theme: next }, '*'); } catch (e) {}
    });
  });
}

/* --- AI Library: section-based browsing, search, filters, sort, views --- */
function initLibrary() {
  const content = document.getElementById('library-content');
  if (!content) return;

  const searchInput = document.getElementById('resource-search');
  const catLinks = Array.from(document.querySelectorAll('#category-filters .cat-link'));
  const typeChips = Array.from(document.querySelectorAll('#type-filters .type-chip'));
  const featuredToggle = document.getElementById('featured-toggle');
  const resetBtn = document.getElementById('filter-reset');
  const countEl = document.getElementById('results-count');
  const noResults = document.getElementById('no-results');
  const sections = Array.from(content.querySelectorAll('.lib-section'));
  const cards = Array.from(content.querySelectorAll('.resource-card'));
  const sortButtons = Array.from(document.querySelectorAll('#library-sort .sort-btn'));
  const viewButtons = Array.from(document.querySelectorAll('.view-btn'));

  const DEFAULT_SECTION = 'Recently Added';

  const state = {
    section: DEFAULT_SECTION,
    types: new Set(),
    featured: false,
    query: '',
    sort: 'added',
    desc: true
  };

  const slug = (cat) => cat.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');

  /* Sub-filters (everything except the section choice) */
  function cardMatchesSubFilters(card, ignoreTypes) {
    if (!ignoreTypes && state.types.size && !state.types.has(card.dataset.type)) return false;
    if (state.featured && !card.dataset.featured) return false;
    if (state.query && !card.dataset.searchable.includes(state.query)) return false;
    return true;
  }

  // "Recently Added" and "Highlights" are duplicate views of cards that also
  // live in the category sections, so they are hidden during a global search to
  // avoid listing a resource twice.
  const DUPLICATE_SECTIONS = new Set(['Recently Added', 'Highlights']);

  function applyFilters() {
    const isSubFiltering = !!(state.query || state.types.size || state.featured);
    // From the default "Recently Added" view, any sub-filter (search query, type
    // chip, or Featured) filters the ENTIRE library (results grouped by category,
    // each resource shown once) instead of only the recent cards — otherwise a
    // type like "tool" would only match the few in Recently Added. Selecting a
    // specific category first scopes the search/filters back to that category.
    const globalSearch = isSubFiltering && state.section === DEFAULT_SECTION;

    let visible = 0;
    let sectionTotal = 0;
    const activeSection = sections.find(s => s.dataset.groupCategory === state.section);
    const availableTypes = new Set();
    // On the default view, any sub-filter searches the whole library, so compute
    // chip availability over that same (deduped) global scope — otherwise types
    // absent from Recently Added would show greyed even though selecting them works.
    const availGlobal = globalSearch || state.section === DEFAULT_SECTION;

    sections.forEach(section => {
      const cat = section.dataset.groupCategory;
      const inScope = globalSearch ? !DUPLICATE_SECTIONS.has(cat) : section === activeSection;
      const inAvailScope = availGlobal ? !DUPLICATE_SECTIONS.has(cat) : section === activeSection;
      const sectionCards = section.querySelectorAll('.resource-card');

      let sectionMatches = 0;
      let sectionVisible = 0;
      sectionCards.forEach(card => {
        const matches = cardMatchesSubFilters(card, false);
        if (matches) sectionMatches++;
        // Types available under query/featured (ignoring the type filter itself)
        if (inAvailScope && cardMatchesSubFilters(card, true)) availableTypes.add(card.dataset.type);
        if (inScope) {
          sectionTotal++;
          card.style.display = matches ? '' : 'none';
          if (matches) { visible++; sectionVisible++; }
        }
      });

      // In global search, drop category sections with no matches so we don't show
      // an empty heading; otherwise a section shows only when it's the active one.
      section.style.display = (inScope && (!globalSearch || sectionVisible > 0)) ? '' : 'none';

      // Dim sidebar categories with no matches under current sub-filters
      const link = catLinks.find(l => l.dataset.category === section.dataset.groupCategory);
      if (link) link.classList.toggle('is-empty', sectionMatches === 0 && section !== activeSection);
    });

    // Grey out type chips not available in scope
    typeChips.forEach(chip => {
      const t = chip.dataset.type;
      chip.classList.toggle('is-empty', !availableTypes.has(t) && !state.types.has(t));
    });

    countEl.textContent = globalSearch
      ? 'Showing ' + visible + ' across all resources'
      : (isSubFiltering
          ? 'Showing ' + visible + ' of ' + sectionTotal + ' in ' + state.section
          : sectionTotal + ' in ' + state.section);
    if (resetBtn) resetBtn.classList.toggle('visible', isSubFiltering);
    noResults.style.display = (visible === 0) ? '' : 'none';
  }

  /* --- Section (category) selection --- */
  function setSection(cat, updateHash) {
    state.section = cat;
    catLinks.forEach(l => {
      const isActive = l.dataset.category === cat;
      l.classList.toggle('active', isActive);
      if (isActive) {
        l.classList.remove('is-empty');
        l.setAttribute('aria-current', 'true');
      } else {
        l.removeAttribute('aria-current');
      }
    });
    applyFilters();
    if (updateHash) {
      history.replaceState(null, '', '#' + slug(cat));
    }
  }

  catLinks.forEach(link => {
    link.addEventListener('click', () => setSection(link.dataset.category, true));
  });

  /* --- Type chips (multi-select) --- */
  typeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const t = chip.dataset.type;
      if (state.types.has(t)) state.types.delete(t);
      else state.types.add(t);
      chip.classList.toggle('active', state.types.has(t));
      applyFilters();
    });
  });

  /* --- Featured toggle --- */
  if (featuredToggle) {
    featuredToggle.addEventListener('click', () => {
      state.featured = !state.featured;
      featuredToggle.setAttribute('aria-pressed', state.featured);
      applyFilters();
    });
  }

  /* --- Search --- */
  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      state.query = searchInput.value.toLowerCase().trim();
      applyFilters();
    }, 150));

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        state.query = '';
        applyFilters();
        searchInput.blur();
      }
    });

    // "/" focuses search from anywhere on the page
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey &&
          !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  /* --- Reset (clears sub-filters, keeps current category) --- */
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.types.clear();
      state.featured = false;
      state.query = '';
      if (searchInput) searchInput.value = '';
      typeChips.forEach(c => c.classList.remove('active'));
      if (featuredToggle) featuredToggle.setAttribute('aria-pressed', 'false');
      applyFilters();
    });
  }

  /* --- Sort (within each category section) --- */
  function cardKey(card, sort) {
    if (sort === 'added') return parseInt(card.dataset.index, 10) || 0;
    if (sort === 'date') return card.dataset.date || '';
    if (sort === 'author') return card.dataset.authorSort || '';
    return 0;
  }

  function applySort() {
    sections.forEach(section => {
      const grid = section.querySelector('.lib-grid');
      if (!grid) return;
      const sectionCards = Array.from(grid.querySelectorAll('.resource-card'));
      const emptyLast = state.sort === 'date' || state.sort === 'author';

      sectionCards.sort((a, b) => {
        const ka = cardKey(a, state.sort);
        const kb = cardKey(b, state.sort);
        if (emptyLast) {
          const aEmpty = ka === '' || ka == null;
          const bEmpty = kb === '' || kb == null;
          if (aEmpty && !bEmpty) return 1;
          if (!aEmpty && bEmpty) return -1;
        }
        let cmp;
        if (typeof ka === 'number' && typeof kb === 'number') cmp = ka - kb;
        else cmp = String(ka).localeCompare(String(kb));
        return state.desc ? -cmp : cmp;
      });

      sectionCards.forEach(c => grid.appendChild(c));
    });
  }

  sortButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sort = btn.dataset.sort;
      if (state.sort === sort) {
        state.desc = !state.desc;
      } else {
        state.sort = sort;
        // Sensible defaults: newest first for dates, A→Z for names
        state.desc = (sort === 'added' || sort === 'date');
      }
      sortButtons.forEach(b => {
        b.classList.toggle('active', b === btn);
        b.classList.toggle('desc', b === btn && state.desc);
      });
      applySort();
    });
  });

  const defaultSortBtn = sortButtons.find(b => b.dataset.sort === state.sort);
  if (defaultSortBtn) {
    defaultSortBtn.classList.add('active');
    if (state.desc) defaultSortBtn.classList.add('desc');
  }
  applySort();

  /* --- View toggle (cards / list), persisted --- */
  function setView(view) {
    content.dataset.view = view;
    viewButtons.forEach(b => b.classList.toggle('active', b.dataset.view === view));
    try { localStorage.setItem('libView', view); } catch (e) {}
  }

  viewButtons.forEach(btn => {
    btn.addEventListener('click', () => setView(btn.dataset.view));
  });

  try {
    const savedView = localStorage.getItem('libView');
    if (savedView === 'list' || savedView === 'cards') setView(savedView);
  } catch (e) {}

  /* --- Card expand/collapse (clamped descriptions, list rows) --- */
  cards.forEach(card => {
    let downX = 0, downY = 0;
    card.addEventListener('mousedown', (e) => {
      downX = e.clientX;
      downY = e.clientY;
    });
    card.addEventListener('click', (e) => {
      if (e.target.closest('a, button')) return;
      // Don't collapse when the click is the end of a text selection (let people select/copy):
      // either the pointer moved between press and release (drag-select), or text is selected
      // (e.g. double-click to select a word).
      const moved = Math.abs(e.clientX - downX) + Math.abs(e.clientY - downY) > 6;
      const selection = window.getSelection();
      const hasSelection = selection && selection.toString().length > 0;
      if (moved || hasSelection) return;
      card.classList.toggle('expanded');
    });
  });

  /* --- Initial section: URL hash (back-compat) or default --- */
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const hashMatch = hash && catLinks.find(l => slug(l.dataset.category) === hash);
  if (hashMatch) {
    setSection(hashMatch.dataset.category, false);
  } else {
    setSection(DEFAULT_SECTION, false);
  }
}

/* --- Research library (/research/) ---
   A focused adaptation of initLibrary() for the publications library. Kept
   separate so the AI page (initLibrary) stays untouched. Differences:
     - the sub-filter is a multi-value "Topic area" (data-topics, pipe-joined)
       instead of the AI page's single-value data-type,
     - sorts are "Date added" (data-added, ISO) and "Date of reference"
       (data-year); there is no author sort and no featured toggle,
     - disclosure + citation copy are handled globally by initPubToggles() and
       initCitationCopy(); this controller only adds whole-card click-to-toggle,
     - the view preference persists under its own key ('researchView'). */
function initResearchLibrary() {
  const content = document.getElementById('library-content');
  if (!content || !content.querySelector('.research-card')) return;

  const searchInput = document.getElementById('resource-search');
  const catLinks = Array.from(document.querySelectorAll('#category-filters .cat-link'));
  const topicChips = Array.from(document.querySelectorAll('#type-filters .type-chip'));
  const resetBtn = document.getElementById('filter-reset');
  const countEl = document.getElementById('results-count');
  const noResults = document.getElementById('no-results');
  const sections = Array.from(content.querySelectorAll('.lib-section'));
  const cards = Array.from(content.querySelectorAll('.research-card'));
  const sortButtons = Array.from(document.querySelectorAll('#library-sort .sort-btn'));
  const viewButtons = Array.from(document.querySelectorAll('.view-btn'));

  const DEFAULT_SECTION = 'Recently Added';

  const state = {
    section: DEFAULT_SECTION,
    topics: new Set(),
    query: '',
    sort: 'added',
    desc: true
  };

  const slug = (cat) => cat.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');

  // Topic labels contain spaces and ampersands, so they are pipe-joined in the
  // data attribute rather than space-joined (unlike the AI page's data-type).
  const cardTopics = (card) => (card.dataset.topics || '').split('|').filter(Boolean);

  /* Sub-filters (everything except the section choice) */
  function cardMatchesSubFilters(card, ignoreTopics) {
    if (!ignoreTopics && state.topics.size) {
      const ts = cardTopics(card);
      let any = false;
      state.topics.forEach(t => { if (ts.includes(t)) any = true; });
      if (!any) return false;
    }
    if (state.query && !card.dataset.searchable.includes(state.query)) return false;
    return true;
  }

  // "Recently Added" duplicates cards that also live in the type sections, so it
  // is hidden during a global search to avoid listing a publication twice.
  const DUPLICATE_SECTIONS = new Set(['Recently Added']);

  function applyFilters() {
    const isSubFiltering = !!(state.query || state.topics.size);
    // From the default "Recently Added" view, any sub-filter (search query or a
    // topic-area selection) filters ALL publications (grouped by type, each shown
    // once) — otherwise a broad topic like "AI & technology" would only match the
    // few cards that happen to be in Recently Added. Selecting a specific category
    // first scopes the search/topic filter back to that category.
    const globalSearch = isSubFiltering && state.section === DEFAULT_SECTION;

    let visible = 0;
    let sectionTotal = 0;
    const activeSection = sections.find(s => s.dataset.groupCategory === state.section);
    const availableTopics = new Set();
    // On the default view, any sub-filter searches the whole library, so compute
    // chip availability over that same (deduped) global scope — otherwise topics
    // absent from Recently Added would show greyed even though selecting them works.
    const availGlobal = globalSearch || state.section === DEFAULT_SECTION;

    sections.forEach(section => {
      const cat = section.dataset.groupCategory;
      const inScope = globalSearch ? !DUPLICATE_SECTIONS.has(cat) : section === activeSection;
      const inAvailScope = availGlobal ? !DUPLICATE_SECTIONS.has(cat) : section === activeSection;
      const sectionCards = section.querySelectorAll('.research-card');

      let sectionMatches = 0;
      let sectionVisible = 0;
      sectionCards.forEach(card => {
        const matches = cardMatchesSubFilters(card, false);
        if (matches) sectionMatches++;
        // Topics available under the current query (ignoring the topic filter itself)
        if (inAvailScope && cardMatchesSubFilters(card, true)) cardTopics(card).forEach(t => availableTopics.add(t));
        if (inScope) {
          sectionTotal++;
          card.style.display = matches ? '' : 'none';
          if (matches) { visible++; sectionVisible++; }
        }
      });

      // In global search, drop type sections with no matches so we don't show an
      // empty heading; otherwise a section shows only when it's the active one.
      section.style.display = (inScope && (!globalSearch || sectionVisible > 0)) ? '' : 'none';

      // Dim sidebar categories with no matches under current sub-filters
      const link = catLinks.find(l => l.dataset.category === section.dataset.groupCategory);
      if (link) link.classList.toggle('is-empty', sectionMatches === 0 && section !== activeSection);
    });

    // Grey out topic chips not available in scope
    topicChips.forEach(chip => {
      const t = chip.dataset.topic;
      chip.classList.toggle('is-empty', !availableTopics.has(t) && !state.topics.has(t));
    });

    countEl.textContent = globalSearch
      ? 'Showing ' + visible + ' across all publications'
      : (isSubFiltering
          ? 'Showing ' + visible + ' of ' + sectionTotal + ' in ' + state.section
          : sectionTotal + ' in ' + state.section);
    if (resetBtn) resetBtn.classList.toggle('visible', isSubFiltering);
    noResults.style.display = (visible === 0) ? '' : 'none';
  }

  /* --- Section (category) selection --- */
  function setSection(cat, updateHash) {
    state.section = cat;
    catLinks.forEach(l => {
      const isActive = l.dataset.category === cat;
      l.classList.toggle('active', isActive);
      if (isActive) {
        l.classList.remove('is-empty');
        l.setAttribute('aria-current', 'true');
      } else {
        l.removeAttribute('aria-current');
      }
    });
    applyFilters();
    if (updateHash) {
      history.replaceState(null, '', '#' + slug(cat));
    }
  }

  catLinks.forEach(link => {
    link.addEventListener('click', () => setSection(link.dataset.category, true));
  });

  /* --- Topic chips (multi-select) --- */
  topicChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const t = chip.dataset.topic;
      if (state.topics.has(t)) state.topics.delete(t);
      else state.topics.add(t);
      chip.classList.toggle('active', state.topics.has(t));
      applyFilters();
    });
  });

  /* --- Search --- */
  if (searchInput) {
    searchInput.addEventListener('input', debounce(() => {
      state.query = searchInput.value.toLowerCase().trim();
      applyFilters();
    }, 150));

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.value = '';
        state.query = '';
        applyFilters();
        searchInput.blur();
      }
    });

    // "/" focuses search from anywhere on the page
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && !e.metaKey && !e.ctrlKey &&
          !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
        e.preventDefault();
        searchInput.focus();
      }
    });
  }

  /* --- Reset (clears sub-filters, keeps current category) --- */
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.topics.clear();
      state.query = '';
      if (searchInput) searchInput.value = '';
      topicChips.forEach(c => c.classList.remove('active'));
      applyFilters();
    });
  }

  /* --- Sort (within each section) --- */
  function cardKey(card, sort) {
    if (sort === 'added') return card.dataset.added || '';
    if (sort === 'date') return card.dataset.year || '';
    return '';
  }

  function applySort() {
    sections.forEach(section => {
      const grid = section.querySelector('.lib-grid');
      if (!grid) return;
      const sectionCards = Array.from(grid.querySelectorAll('.research-card'));
      // Entries without the sort key sort last (mainly `added`, absent on most).
      const emptyLast = true;

      sectionCards.sort((a, b) => {
        const ka = cardKey(a, state.sort);
        const kb = cardKey(b, state.sort);
        if (emptyLast) {
          const aEmpty = ka === '' || ka == null;
          const bEmpty = kb === '' || kb == null;
          if (aEmpty && !bEmpty) return 1;
          if (!aEmpty && bEmpty) return -1;
        }
        const cmp = String(ka).localeCompare(String(kb));
        return state.desc ? -cmp : cmp;
      });

      sectionCards.forEach(c => grid.appendChild(c));
    });
  }

  sortButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sort = btn.dataset.sort;
      if (state.sort === sort) {
        state.desc = !state.desc;
      } else {
        state.sort = sort;
        state.desc = true; // newest first by default for both date sorts
      }
      sortButtons.forEach(b => {
        b.classList.toggle('active', b === btn);
        b.classList.toggle('desc', b === btn && state.desc);
      });
      applySort();
    });
  });

  const defaultSortBtn = sortButtons.find(b => b.dataset.sort === state.sort);
  if (defaultSortBtn) {
    defaultSortBtn.classList.add('active');
    if (state.desc) defaultSortBtn.classList.add('desc');
  }
  applySort();

  /* --- View toggle (cards / list), persisted under its own key ---
     Phones are list-only (the toggle is hidden and card view had cross-engine
     rendering issues), so force list there without touching the saved
     desktop preference. */
  function setView(view) {
    content.dataset.view = view;
    viewButtons.forEach(b => b.classList.toggle('active', b.dataset.view === view));
    try { localStorage.setItem('researchView', view); } catch (e) {}
  }

  const listOnly = window.matchMedia('(max-width: 640px)').matches;
  if (listOnly) {
    content.dataset.view = 'list';
  } else {
    viewButtons.forEach(btn => {
      btn.addEventListener('click', () => setView(btn.dataset.view));
    });
    try {
      const savedView = localStorage.getItem('researchView');
      if (savedView === 'list' || savedView === 'cards') setView(savedView);
    } catch (e) {}
  }

  /* --- Whole-card click-to-toggle (disclosure itself handled by initPubToggles) --- */
  cards.forEach(card => {
    const toggle = card.querySelector('.pub-toggle');
    if (!toggle) return;
    card.addEventListener('click', (e) => {
      // Ignore clicks on interactive children, selectable citation text, or the
      // toggle header (which fires its own handler) to avoid double-toggling.
      if (e.target.closest('a, button, input, textarea, label, .citation-text, .pub-toggle')) return;
      toggle.click();
    });
  });

  /* --- Initial section: URL hash (deep link) or default --- */
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const hashMatch = hash && catLinks.find(l => slug(l.dataset.category) === hash);
  if (hashMatch) {
    setSection(hashMatch.dataset.category, false);
  } else {
    setSection(DEFAULT_SECTION, false);
  }
}

