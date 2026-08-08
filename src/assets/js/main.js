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
  initAuthorEtAl();
  initMobileNav();
  initThemeToggle();
  initWebMCP();
});

/* --- Author lists: trim long ones to a single line with "et al." ---
   Resource cards carry up to a dozen names, which wrap to three lines in card
   view. The card and list views differ enough in width (about 45 vs 98
   characters at desktop) that a single server-rendered string can't suit both,
   so trim in the browser against the measured width and re-fit whenever it
   changes. Without JS the full list renders and wraps, as before. */
function initAuthorEtAl() {
  const metas = Array.from(document.querySelectorAll('.card-meta'));
  if (!metas.length) return;

  metas.forEach(m => {
    if (m.dataset.fullAuthors === undefined) m.dataset.fullAuthors = m.textContent.trim();
  });

  const SUFFIX = ', et al.';

  function shorten(full, budget) {
    if (full.length <= budget) return full;
    const names = full.split(/,\s*/).filter(Boolean);
    // Some sources already end in "et al."; drop it so we don't double up
    if (/^et al\.?$/i.test(names[names.length - 1])) names.pop();
    // "et al." has to stand in for at least two names to be worth the trade
    if (names.length < 3) return full;
    let k = names.length - 2;
    while (k > 1 && (names.slice(0, k).join(', ') + SUFFIX).length > budget) k--;
    return names.slice(0, k).join(', ') + SUFFIX;
  }

  function refit() {
    // Every card shares a width within a view, so one visible probe is enough
    const probe = metas.find(m => m.offsetParent !== null);
    if (!probe) return;
    const width = probe.getBoundingClientRect().width;
    if (!width) return;
    const cs = getComputedStyle(probe);
    const ctx = refit.ctx || (refit.ctx = document.createElement('canvas').getContext('2d'));
    ctx.font = cs.fontStyle + ' ' + cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily;
    const charWidth = ctx.measureText('M').width; // the card meta font is monospace
    if (!charWidth) return;
    const budget = Math.floor(width / charWidth);
    metas.forEach(m => {
      const next = shorten(m.dataset.fullAuthors, budget);
      if (m.textContent !== next) m.textContent = next;
    });
  }

  refit();
  // Re-fit on the view toggle (card/list widths differ) and on resize
  document.querySelectorAll('.view-btn').forEach(b => b.addEventListener('click', () => setTimeout(refit, 0)));
  window.addEventListener('resize', debounce(refit, 150));
  // The mono webfont loads async; the character width changes when it lands
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refit);
}

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

    /* A collapsed panel is clipped by max-height, which hides it visually but
       leaves the citation buttons and abstract links inside it tabbable — focus
       would vanish into a closed card. `inert` takes the whole subtree out of
       the tab order and the accessibility tree without touching how it paints,
       so the expand animation is unaffected. */
    const collapsed = toggle.nextElementSibling;
    if (collapsed) collapsed.inert = true;

    toggle.addEventListener('click', () => {
      const details = toggle.nextElementSibling;
      if (!details) return;
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !isOpen);
      details.classList.toggle('open', !isOpen);
      details.inert = isOpen;
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

  // Swallow the click that trails a swipe-open, so the gesture doesn't
  // immediately toggle the menu back shut.
  let swallowClickUntil = 0;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    if (Date.now() < swallowClickUntil) return;
    if (links.classList.contains('open')) closeMenu(); else openMenu();
  });

  // Close menu when clicking a nav link
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close menu when tapping outside on mobile
  document.addEventListener('click', (e) => {
    if (Date.now() < swallowClickUntil) return;
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
      // Never leave the bar tucked away on a viewport that can't re-show it.
      if (!isPanel()) header.classList.remove('nav-tucked');
    }, 100);
  });

  /* --- Tuck the bar on downward scroll (mobile only) ---
     Reveal is immediate on any upward scroll: waiting until the top of the page
     is what makes this pattern feel broken. TUCK_AFTER keeps the bar put until
     you are clearly reading rather than nudging the page, and DELTA absorbs the
     small oscillations of momentum scrolling and iOS rubber-banding, which
     would otherwise flicker the bar. */
  const TUCK_AFTER = 88; // px scrolled before hiding is allowed (~1.5 bar heights)
  const DELTA = 6;       // px of travel in one direction before it reacts
  let lastY = Math.max(0, window.scrollY);
  let ticking = false;

  function updateBar() {
    ticking = false;
    if (!isPanel()) { header.classList.remove('nav-tucked'); return; }
    const y = Math.max(0, window.scrollY); // clamp iOS overscroll above the top
    // Always visible near the top, while the menu is open, or while focus is
    // inside the bar — tabbing to a link that then slid away is a trap.
    if (y <= TUCK_AFTER ||
        links.classList.contains('open') ||
        header.contains(document.activeElement)) {
      header.classList.remove('nav-tucked');
      lastY = y;
      return;
    }
    const diff = y - lastY;
    if (Math.abs(diff) < DELTA) return; // let travel accumulate, don't reset lastY
    lastY = y;
    header.classList.toggle('nav-tucked', diff > 0);
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { ticking = true; requestAnimationFrame(updateBar); }
  }, { passive: true });

  header.addEventListener('focusin', () => header.classList.remove('nav-tucked'));

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

  /* Swipe to OPEN: drag down anywhere on the top bar, or drag from the
     top-right corner in any direction between straight left and straight
     down. The panel follows the finger and opens past the threshold. */
  const OPEN_COMMIT = 50;     // px of travel that commits to opening
  const ENGAGE_SLOP = 6;      // px before we decide the gesture is ours
  let openGesture = null;

  function openZoneAt(x, y) {
    if (!window.matchMedia('(max-width: 768px)').matches) return null;
    const bar = header.getBoundingClientRect();
    // Corner wins over the bar: the top-right corner sits inside the header,
    // and it accepts a wider range of directions.
    if (y >= 0 && y <= bar.bottom + 40 && x >= window.innerWidth - 90) return 'corner';
    if (y >= 0 && y <= bar.bottom) return 'bar';
    return null;
  }

  /* The panel hangs off the top of its own box, so translating it down by
     the finger's travel makes it track the finger 1:1 — the mirror image of
     the swipe-up-to-close drag. */
  function previewOpen(travel, panelHeight) {
    links.style.transition = 'none';
    links.style.transform = 'translateY(' + Math.min(0, travel - panelHeight) + 'px)';
    links.style.opacity = String(Math.min(1, travel / 80));
    setBarProgress(1 - Math.min(1, travel / OPEN_COMMIT));
  }

  function resetPreview() {
    links.style.transition = '';
    links.style.transform = '';
    links.style.opacity = '';
    clearBarProgress();
  }

  document.addEventListener('touchstart', (e) => {
    if (links.classList.contains('open') || e.touches.length !== 1) return;
    const t = e.touches[0];
    const zone = openZoneAt(t.clientX, t.clientY);
    if (!zone) return;
    openGesture = {
      x: t.clientX, y: t.clientY, zone,
      engaged: false, travel: 0,
      h: links.offsetHeight || 240 // measured once; the drag reads it per move
    };
    // Only listen non-passively while a candidate gesture is live, so normal
    // scrolling keeps the passive-listener fast path.
    document.addEventListener('touchmove', onOpenMove, { passive: false });
  }, { passive: true });

  function onOpenMove(e) {
    if (!openGesture || !e.touches.length) return;
    const t = e.touches[0];
    const dx = t.clientX - openGesture.x;
    const dy = t.clientY - openGesture.y;

    if (!openGesture.engaged) {
      if (Math.abs(dx) < ENGAGE_SLOP && Math.abs(dy) < ENGAGE_SLOP) return;
      const downward = dy > 0 && dy >= Math.abs(dx);
      // From the corner, anything in the left→down quadrant counts
      const leftward = openGesture.zone === 'corner' && dx < 0 && dy > -ENGAGE_SLOP;
      if (!downward && !leftward) { openGesture = null; return; }
      openGesture.engaged = true;
    }

    openGesture.travel = Math.max(0, dy, -dx);
    previewOpen(openGesture.travel, openGesture.h);
    if (e.cancelable) e.preventDefault();
  }

  function endOpenGesture(commit) {
    document.removeEventListener('touchmove', onOpenMove, { passive: false });
    const g = openGesture;
    openGesture = null;
    if (!g || !g.engaged) return;
    resetPreview();
    if (commit && g.travel >= OPEN_COMMIT) {
      openMenu();
      swallowClickUntil = Date.now() + 500;
    }
  }

  document.addEventListener('touchend', () => endOpenGesture(true), { passive: true });
  document.addEventListener('touchcancel', () => endOpenGesture(false), { passive: true });

  /* No body scroll lock here. `overflow: hidden` on <body> makes it a scroll
     container, which moves the sticky header's scrollport from the viewport to
     the body — so opening the menu part-way down a page threw the header (and
     the panel hanging off it) to the top of the document, out of sight. The
     panel is a small dropdown pinned to the header, so it stays usable while
     the page scrolls anyway. */
  /* The closed panel is only hidden by opacity/transform, so its links stayed
     tabbable — a keyboard user tabbing off the title landed on four invisible
     off-screen links. `inert` takes them out of the tab order without touching
     the slide animation. */
  function openMenu() {
    // The panel hangs off the bottom of the bar, so the bar has to be on screen
    // before it can be shown — e.g. opening via the swipe gesture while tucked.
    header.classList.remove('nav-tucked');
    links.classList.add('open');
    links.inert = false;
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    links.classList.remove('open');
    links.inert = isPanel();
    toggle.setAttribute('aria-expanded', 'false');
  }

  /* Above 768px the same <ul> is the ordinary desktop nav — always reachable.
     Only the collapsed dropdown may be inert, so this has to be re-evaluated
     whenever the breakpoint is crossed. */
  function isPanel() {
    return window.matchMedia('(max-width: 768px)').matches;
  }

  function syncInert() {
    links.inert = isPanel() && !links.classList.contains('open');
  }

  syncInert();
  window.addEventListener('resize', syncInert);
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
    query: '',
    sort: 'added',
    desc: true
  };

  const slug = (cat) => cat.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');

  /* Sub-filters (everything except the section choice) */
  function cardMatchesSubFilters(card, ignoreTypes) {
    if (!ignoreTypes && state.types.size && !state.types.has(card.dataset.type)) return false;
    if (state.query && !card.dataset.searchable.includes(state.query)) return false;
    return true;
  }

  // "Recently Added" and "Highlights" are duplicate views of cards that also
  // live in the category sections, so they are hidden during a global search to
  // avoid listing a resource twice.
  const DUPLICATE_SECTIONS = new Set(['Recently Added', 'Highlights']);

  function applyFilters() {
    const isSubFiltering = !!(state.query || state.types.size);
    // From the default "Recently Added" view, any sub-filter (search query or
    // type chip) filters the ENTIRE library (results grouped by category,
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
        // Types available under the current query (ignoring the type filter itself)
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
      state.query = '';
      if (searchInput) searchInput.value = '';
      typeChips.forEach(c => c.classList.remove('active'));
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
       (data-year); there is no author sort,
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

  const DEFAULT_SECTION = 'Recently Added';

  /* data-category holds the raw publication type ("Report"); the sidebar shows
     the display label ("Reports & briefs"). Use the label in the results line. */
  const catLabels = {};
  catLinks.forEach(l => {
    const name = l.querySelector('.cat-name');
    if (name) catLabels[l.dataset.category] = name.textContent.trim();
  });
  const catLabel = (cat) => catLabels[cat] || cat;

  const state = {
    section: DEFAULT_SECTION,
    topics: new Set(),
    query: ''
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
          ? 'Showing ' + visible + ' of ' + sectionTotal + ' in ' + catLabel(state.section)
          : sectionTotal + ' in ' + catLabel(state.section));
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

  /* Sorting removed: entries render in their source order (per section, newest
     by year first, from researchSections.js). */

  /* View toggle removed: the research library is list-only at every width.
     Clear the old preference so a saved 'cards' value can't resurrect it. */
  content.dataset.view = 'list';
  try { localStorage.removeItem('researchView'); } catch (e) {}

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

