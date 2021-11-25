const fs = require('fs/promises')
const path = require('path');

const DATA_PATH = path.join(__dirname, 'data', 'users.json');

module.exports = async (username) => {
  const users = JSON.parse(await fs.readFile(DATA_PATH, 'utf8'));

  const user = users.find((user) => user.username === username)
  return user
}
