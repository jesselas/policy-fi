/* ==========================================================================
   policy.fi — Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initExternalLinks();
  initAccordions();
  initPubToggles();
  initRecentResearchCards();
  initCitationCopy();
  initLibrary();
  initMobileNav();
  initThemeToggle();
});

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

  function applyFilters() {
    const isSubFiltering = !!(state.query || state.types.size || state.featured);
    let visible = 0;
    let sectionTotal = 0;
    const activeSection = sections.find(s => s.dataset.groupCategory === state.section);
    const availableTypes = new Set();

    sections.forEach(section => {
      const isActive = section === activeSection;
      section.style.display = isActive ? '' : 'none';
      const sectionCards = section.querySelectorAll('.resource-card');

      let sectionMatches = 0;
      sectionCards.forEach(card => {
        const matches = cardMatchesSubFilters(card, false);
        if (matches) sectionMatches++;
        if (isActive) {
          sectionTotal++;
          card.style.display = matches ? '' : 'none';
          if (matches) visible++;
          // Types available in this section under query/featured (ignoring type filter)
          if (cardMatchesSubFilters(card, true)) availableTypes.add(card.dataset.type);
        }
      });

      // Dim sidebar categories with no matches under current sub-filters
      const link = catLinks.find(l => l.dataset.category === section.dataset.groupCategory);
      if (link) link.classList.toggle('is-empty', sectionMatches === 0 && !isActive);
    });

    // Grey out type chips not available in the selected category
    typeChips.forEach(chip => {
      const t = chip.dataset.type;
      chip.classList.toggle('is-empty', !availableTypes.has(t) && !state.types.has(t));
    });

    countEl.textContent = isSubFiltering
      ? 'Showing ' + visible + ' of ' + sectionTotal + ' in ' + state.section
      : sectionTotal + ' in ' + state.section;
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

