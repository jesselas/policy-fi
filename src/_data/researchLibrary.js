const publications = require('./publications.json');
const researchSections = require('./researchSections.js');

// Derived structures for the /research/ filterable library UI.
//
// - `categories`: publication-type sections, already grouped and ordered by
//   researchSections.js (pinLast → year desc → added desc → source order, with
//   empty sections dropped). Each has { type, label, pubs }.
// - `recent`: every publication carrying an explicit `added` ISO date, newest
//   first — powers the sidebar "Recently Added" view. Grows automatically as
//   new entries are tagged with `added`.
// - `topics`: the fixed, ordered list of broad topic-area filters. Every entry
//   in publications.json carries a `topics` array drawn from this set.

const topics = [
  'Taxes & benefits',
  'Poverty & inequality',
  'AI & technology',
  'Data & methods',
  'Labour & skills',
];

const recent = publications
  .map((p, idx) => ({ ...p, _idx: idx }))
  .filter((p) => p.added)
  .sort((a, b) => {
    const cmp = String(b.added).localeCompare(String(a.added));
    return cmp !== 0 ? cmp : a._idx - b._idx;
  });

module.exports = {
  categories: researchSections,
  recent,
  topics,
};
