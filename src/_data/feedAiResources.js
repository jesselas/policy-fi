const resources = require('./ai_resources.json');

// Expand a "YYYY" / "YYYY-MM" / "YYYY-MM-DD" date to an RFC3339 timestamp.
function rfc3339(date) {
  if (/^\d{4}$/.test(date)) return date + '-01-01T00:00:00Z';
  if (/^\d{4}-\d{2}$/.test(date)) return date + '-01T00:00:00Z';
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date + 'T00:00:00Z';
  return '2024-01-01T00:00:00Z';
}

// Most-recently-added first (entries are appended to the JSON), top 20, for the
// /ai-econ/feed.xml Atom feed of the curated AI-for-economists library.
module.exports = resources
  .filter((e) => !e.internal)
  .slice(-20)
  .reverse()
  .map((e) => ({
    title: e.title,
    url: e.url,
    author: e.author || 'Jesse Lastunen (curator)',
    updated: rfc3339(e.date || ''),
    summary: e.shortDescription || e.description || e.title,
    category: e.category,
    id: e.url,
  }));
