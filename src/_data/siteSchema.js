const site = require('./site.json');

// Site-wide WebSite structured data, emitted on every page from base.njk.
module.exports = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.title,
  alternateName: 'policy.fi',
  url: site.url + '/',
  description: site.description,
  inLanguage: 'en',
  author: {
    '@type': 'Person',
    name: 'Jesse Lastunen',
    url: site.url,
  },
  publisher: {
    '@type': 'Person',
    name: 'Jesse Lastunen',
    url: site.url,
  },
};
