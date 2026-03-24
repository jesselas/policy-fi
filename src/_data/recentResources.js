const aiResources = require('./ai_resources.json');

module.exports = aiResources
  .filter(e => !e.internal && e.date)
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 6);
