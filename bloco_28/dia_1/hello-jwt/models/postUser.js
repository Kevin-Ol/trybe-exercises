const fs = require('fs/promises')
const path = require('path');

const DATA_PATH = path.join(__dirname, 'data', 'users.json');

module.exports = async (user) => {
  const users = JSON.parse(await fs.readFile(DATA_PATH, 'utf8'));
  await fs.writeFile(DATA_PATH, JSON.stringify([...users, user]));
  return user
}
