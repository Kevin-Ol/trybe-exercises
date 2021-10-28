const { validateTeamName, validateTeamInitials, validateTeamCountry } = require('../helpers');
const fs = require('fs/promises');

const readContentFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

exports.createTeam = async (req, res, next) => {
  const { name, initials, country, league } = req.body;

  if (!name || !initials || !country) {
    return res.status(404).json({ "message": "invalid data" })
  }

  const validName = validateTeamName(name);
  const validInitials = validateTeamInitials(initials);
  const validCountry = validateTeamCountry(country);

  if (!validName || !validInitials || !validCountry) {
    return res.status(404).json({ "message": "invalid data" })
  }
  try {
    const teams = await readContentFile('teams.json') || [];
    const newTeam = { name, initials, country, league };
    await fs.writeFile('teams.json', JSON.stringify([...teams, newTeam]));
    return res.status(201).json(newTeam);
  } catch (error) {
    error.statusCode = 400;
    next(error);
  }
}