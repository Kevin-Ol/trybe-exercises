const fs = require('fs');
function write(file, content) {
  fs.writeFileSync(file, content);
  return 'ok';
}

module.exports = write;
