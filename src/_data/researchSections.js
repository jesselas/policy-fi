const publications = require('./publications.json');

// Grouping and within-section ordering for the /research page.
// Sections appear in `typeOrder`; within each section, newest first:
//   1. year descending,
//   2. then `added` ISO date descending (a more recently added entry sits
//      higher; entries without `added` sort after those that have one),
//   3. then original publications.json order as a stable tiebreaker.
const typeOrder = [
  'Book Chapter',
  'Peer Reviewed',
  'Other Published Work',
  'Country Report',
  'Technical Note',
  'PhD Dissertation',
  'Research Assistance',
];

const typeLabels = {
  'Book Chapter': 'Book chapters',
  'Peer Reviewed': 'Peer reviewed',
  'Other Published Work': 'Other published works',
  'Country Report': 'Country reports',
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
        if ((b.year || 0) !== (a.year || 0)) return (b.year || 0) - (a.year || 0);
        const aAdded = a.added || '';
        const bAdded = b.added || '';
        if (aAdded !== bAdded) return bAdded.localeCompare(aAdded);
        return a._idx - b._idx;
      });
    return { type, label: typeLabels[type], pubs };
  })
  .filter((section) => section.pubs.length > 0);
