const publications = require('./publications.json');

// Newest-first publication list for the /research/feed.xml Atom feed (top 20).
module.exports = publications
  .map((p, idx) => ({ ...p, _idx: idx }))
  .sort((a, b) => {
    if ((b.year || 0) !== (a.year || 0)) return (b.year || 0) - (a.year || 0);
    const aa = a.added || '';
    const bb = b.added || '';
    if (aa !== bb) return bb.localeCompare(aa);
    return a._idx - b._idx;
  })
  .slice(0, 20)
  .map((p) => ({
    title: p.title,
    url: p.url || 'https://policy.fi/research/',
    // Stable RFC3339 timestamp: prefer the curated `added` date, else the year.
    updated: (p.added || (p.year ? p.year + '-01-01' : '2020-01-01')) + 'T00:00:00Z',
    summary: p.abstract || p.citation || p.title,
    id: p.url || ('https://policy.fi/research/#pub-' + p._idx),
  }));
