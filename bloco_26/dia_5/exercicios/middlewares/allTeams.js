const fs = require('fs/promises');

const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

exports.allTeams = async (req, res, next) => {
  const teams = await readContentFile('teams.json') || [];
  return res.status(200).json(teams);
};
