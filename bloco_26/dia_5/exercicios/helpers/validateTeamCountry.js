exports.validateTeamCountry = (country) => {
  if (country.length < 3) {
    return false;
  }
  return true;
};
