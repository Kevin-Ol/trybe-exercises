const { validateEmail } = require('./validateEmail');
const { validateUsername } = require('./validateUsername');
const { validatePassword } = require('./validatePassword');
const { validateTeamName } = require('./validateTeamName');
const { validateTeamInitials } = require('./validateTeamInitials');
const { validateTeamCountry } = require('./validateTeamCountry');

module.exports = {
  validateEmail,
  validateUsername,
  validatePassword,
  validateTeamName,
  validateTeamInitials,
  validateTeamCountry,
};
