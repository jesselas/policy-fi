const publications = require('./publications.json');
const site = require('./site.json');

// Schema.org ItemList of every publication, emitted on the /research/ page so
// agents and search engines can extract the full publication record (title,
// authors, year, venue, DOI/URL, abstract) as machine-readable data.
const TYPE_MAP = {
  'Book Chapter': 'Chapter',
  'Peer Reviewed': 'ScholarlyArticle',
  'Other Published Work': 'ScholarlyArticle',
  'Country Report': 'Report',
  'Technical Note': 'ScholarlyArticle',
  'PhD Dissertation': 'Thesis',
  'Research Assistance': 'CreativeWork',
};

function authorList(pub) {
  const authors = [{ '@type': 'Person', name: 'Jesse Lastunen', url: site.url }];
  if (pub.authors) {
    pub.authors
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
      .forEach((name) => authors.push({ '@type': 'Person', name }));
  }
  return authors;
}

// Newest first: year desc, then `added` date desc, then original order.
const ordered = publications
  .map((p, idx) => ({ ...p, _idx: idx }))
  .sort((a, b) => {
    if ((b.year || 0) !== (a.year || 0)) return (b.year || 0) - (a.year || 0);
    const aa = a.added || '';
    const bb = b.added || '';
    if (aa !== bb) return bb.localeCompare(aa);
    return a._idx - b._idx;
  });

module.exports = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Publications by Jesse Lastunen',
  itemListOrder: 'https://schema.org/ItemListOrderDescending',
  numberOfItems: ordered.length,
  itemListElement: ordered.map((p, i) => {
    const work = {
      '@type': TYPE_MAP[p.type] || 'CreativeWork',
      name: p.title,
      author: authorList(p),
      datePublished: String(p.year || ''),
      inLanguage: 'en',
    };
    if (p.url) {
      work.url = p.url;
      work.sameAs = p.url;
    }
    if (p.publication) work.isPartOf = { '@type': 'CreativeWork', name: p.publication };
    if (p.abstract) work.abstract = p.abstract;
    return { '@type': 'ListItem', position: i + 1, item: work };
  }),
};
