/* ==========================================================================
   policy.fi — Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initExternalLinks();
  initAccordions();
  initPubToggles();
  initCitationCopy();
  initSeeMore();
  initHighlightTabs();
  initResourceFilters();
  initResourceSort();
  initMobileNav();
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

/* --- See More Recent --- */
function initSeeMore() {
  const btn = document.getElementById('see-more-recent');
  if (!btn) return;

  let expanded = false;

  btn.addEventListener('click', () => {
    expanded = !expanded;
    document.querySelectorAll('.recent-extra').forEach(card => {
      card.classList.toggle('visible', expanded);
    });
    btn.textContent = expanded ? 'Show less' : 'See more recent additions';
  });
}

/* --- Highlight/Recent Tabs --- */
function initHighlightTabs() {
  const tabs = document.querySelectorAll('.highlight-tab');
  const highlightsPanel = document.getElementById('highlights-panel');
  const recentPanel = document.getElementById('recent-panel');

  if (!tabs.length || !highlightsPanel || !recentPanel) return;

  const seeMoreBtn = document.getElementById('see-more-recent');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (tab.dataset.tab === 'highlights') {
        highlightsPanel.style.display = '';
        recentPanel.style.display = 'none';
        if (seeMoreBtn) seeMoreBtn.style.display = 'none';
      } else {
        highlightsPanel.style.display = 'none';
        recentPanel.style.display = '';
        if (seeMoreBtn) seeMoreBtn.style.display = '';
      }
    });
  });
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

/* --- Sort resource groups (AI for Economists page) --- */
function initResourceSort() {
  const groups = document.querySelectorAll('.resource-group');
  if (!groups.length) return;

  groups.forEach(group => {
    const body = group.querySelector('.accordion-body');
    const buttons = group.querySelectorAll('.sort-btn');
    if (!body || !buttons.length) return;

    const state = { sort: 'added', desc: true };

    function cardKey(card, sort) {
      if (sort === 'added') return parseInt(card.dataset.index, 10) || 0;
      if (sort === 'date') return card.dataset.date || '';
      if (sort === 'author') return card.dataset.authorSort || '';
      return 0;
    }

    function applySort() {
      const cards = Array.from(body.querySelectorAll('.resource-card'));
      const sort = state.sort;
      const emptyLast = sort === 'date' || sort === 'author';

      cards.sort((a, b) => {
        const ka = cardKey(a, sort);
        const kb = cardKey(b, sort);

        if (emptyLast) {
          const aEmpty = ka === '' || ka == null;
          const bEmpty = kb === '' || kb == null;
          if (aEmpty && !bEmpty) return 1;
          if (!aEmpty && bEmpty) return -1;
        }

        let cmp;
        if (typeof ka === 'number' && typeof kb === 'number') {
          cmp = ka - kb;
        } else {
          cmp = String(ka).localeCompare(String(kb));
        }
        return state.desc ? -cmp : cmp;
      });

      cards.forEach(c => body.appendChild(c));
    }

    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const sort = btn.dataset.sort;

        if (state.sort === sort) {
          state.desc = !state.desc;
        } else {
          state.sort = sort;
          // Sensible defaults: newest first for dates, A→Z for names
          state.desc = (sort === 'added' || sort === 'date');
        }

        buttons.forEach(b => {
          b.classList.toggle('active', b === btn);
          b.classList.toggle('desc', b === btn && state.desc);
        });

        applySort();
      });

      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          btn.click();
        }
      });
    });

    // Apply default sort on load (date added, newest first)
    const defaultBtn = group.querySelector('.sort-btn[data-sort="' + state.sort + '"]');
    if (defaultBtn) {
      defaultBtn.classList.add('active');
      if (state.desc) defaultBtn.classList.add('desc');
    }
    applySort();
  });
}

/* --- Search & Filter (AI for Economists page) --- */
function initResourceFilters() {
  const searchInput = document.getElementById('resource-search');
  const categoryPills = document.querySelectorAll('#category-filters .filter-pill');
  const cards = document.querySelectorAll('.resource-card');
  const groups = document.querySelectorAll('.resource-group');
  const accordionHeaders = document.querySelectorAll('.resource-group .accordion-header');
  const countEl = document.getElementById('results-count');
  const noResults = document.getElementById('no-results');
  const total = cards.length;

  if (!searchInput || !cards.length) return;

  let activeCategory = 'all';

  function applyFilters() {
    const query = searchInput.value.toLowerCase().trim();
    const isFiltering = query || activeCategory !== 'all';
    let visible = 0;

    cards.forEach(card => {
      const matchCat = activeCategory === 'all'
        || card.dataset.category === activeCategory;
      const matchSearch = !query || card.dataset.searchable.includes(query);
      const show = matchCat && matchSearch;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    // Show/hide category groups
    groups.forEach(group => {
      const visibleCards = group.querySelectorAll('.resource-card');
      let hasVisible = false;
      visibleCards.forEach(c => {
        if (c.style.display !== 'none') hasVisible = true;
      });

      const header = group.querySelector('.accordion-header');
      const content = group.querySelector('.accordion-content');

      if (!isFiltering) {
        // Default "All" state: show all groups, but collapsed
        group.style.display = '';
        if (header && content) {
          header.setAttribute('aria-expanded', 'false');
          content.classList.remove('open');
        }
      } else {
        // Filtering: show groups with matches, auto-expand them
        group.style.display = hasVisible ? '' : 'none';
        if (header && content && hasVisible) {
          header.setAttribute('aria-expanded', 'true');
          content.classList.add('open');
        } else if (header && content) {
          header.setAttribute('aria-expanded', 'false');
          content.classList.remove('open');
        }
      }
    });

    countEl.textContent = isFiltering
      ? 'Showing ' + visible + ' of ' + total + ' resources'
      : total + ' resources — click a category or search to browse';
    noResults.style.display = (isFiltering && visible === 0) ? '' : 'none';
  }

  // Search (debounced to avoid excessive DOM reflows)
  searchInput.addEventListener('input', debounce(applyFilters, 150));

  // Category pills
  categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.dataset.category;
      applyFilters();
      const slug = activeCategory === 'all' ? '' : activeCategory.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
      history.replaceState(null, '', slug ? '#' + slug : window.location.pathname);
    });
  });

  // URL hash on load
  const hash = window.location.hash.slice(1);
  if (hash) {
    const matchPill = Array.from(categoryPills).find(function(p) {
      const pillSlug = p.dataset.category.toLowerCase().replace(/\s+&\s+/g, '-').replace(/\s+/g, '-');
      return pillSlug === hash || p.dataset.category === hash;
    });
    if (matchPill) matchPill.click();
  }

  // Show initial resource count
  countEl.style.display = '';
  applyFilters();
}
