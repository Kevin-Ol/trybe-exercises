const fs = require('fs/promises');
const path = require('path');

module.exports = async (id) => {
  const profiles = JSON.parse(await fs.readFile(path.resolve(__dirname, '..', 'profiles.json')));
  const profileFound = profiles.find((profile) => profile.id === id);
  return profileFound;
};
