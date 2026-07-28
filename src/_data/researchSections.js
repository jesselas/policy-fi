const publications = require('./publications.json');

// Grouping and within-section ordering for the /research page.
// Sections appear in `typeOrder`; within each section, newest first:
//   0. entries flagged `pinLast: true` always sort to the bottom of their
//      section, regardless of date,
//   1. year descending,
//   2. then `added` ISO date descending (a more recently added entry sits
//      higher; entries without `added` sort after those that have one),
//   3. then original publications.json order as a stable tiebreaker.
const typeOrder = [
  'Peer Reviewed',
  'Book Chapter',
  'Working Paper',
  'Technical Note',
  'Report',
  'PhD Dissertation',
  'Research Assistance',
];

const typeLabels = {
  'Book Chapter': 'Book chapters',
  'Peer Reviewed': 'Peer reviewed',
  'Working Paper': 'Working papers',
  // Holds the SOUTHMOD country reports, WIDER policy briefs and institutional
  // reports; the per-item card banner says which of the three each one is.
  'Report': 'Reports & briefs',
  'Technical Note': 'Technical notes',
  'PhD Dissertation': 'PhD dissertation',
  'Research Assistance': 'Research assistance',
};

module.exports = typeOrder
  .map((type) => {
    const pubs = publications
      .map((p, idx) => ({ ...p, _idx: idx }))
      .filter((p) => p.type === type)
      .sort((a, b) => {
        if (!!a.pinLast !== !!b.pinLast) return a.pinLast ? 1 : -1;
        if ((b.year || 0) !== (a.year || 0)) return (b.year || 0) - (a.year || 0);
        const aAdded = a.added || '';
        const bAdded = b.added || '';
        if (aAdded !== bAdded) return bAdded.localeCompare(aAdded);
        return a._idx - b._idx;
      });
    return { type, label: typeLabels[type], pubs };
  })
  .filter((section) => section.pubs.length > 0);
