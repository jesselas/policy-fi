const publications = require('./publications.json');

// Sort order for "Recent research" on the home page:
//   1. entries with an explicit `added` ISO date (most recent first),
//   2. then by year (newer first),
//   3. finally by original JSON array order as a stable tiebreaker.
// Add `"added": "YYYY-MM-DD"` to new publications.json entries to surface them here.
module.exports = publications
  .map((p, idx) => ({ ...p, _idx: idx }))
  .sort((a, b) => {
    if (a.added && b.added) return b.added.localeCompare(a.added);
    if (a.added) return -1;
    if (b.added) return 1;
    if (b.year !== a.year) return (b.year || 0) - (a.year || 0);
    return a._idx - b._idx;
  })
  .slice(0, 2);
