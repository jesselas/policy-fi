const aiResources = require('./ai_resources.json');

// Last 26 entries in the array = most recently added
module.exports = aiResources
  .filter(e => !e.internal)
  .slice(-26)
  .reverse();
