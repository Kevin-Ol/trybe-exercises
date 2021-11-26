const fs = require('fs/promises');
const path = require('path');

const DATA_PATH = path.resolve(__dirname, '..', 'profiles.json');

module.exports = async (profile) => {
  const profiles = JSON.parse(await fs.readFile(DATA_PATH));
  console.log(JSON.stringify([...profiles, profile]));
  await fs.writeFile(DATA_PATH, JSON.stringify([...profiles, profile]));
  return profile;
};
