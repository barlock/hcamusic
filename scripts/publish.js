const path = require('path');
const ghPages = require('gh-pages');

ghPages.publish(path.join(__dirname, '../out'), console.log);
