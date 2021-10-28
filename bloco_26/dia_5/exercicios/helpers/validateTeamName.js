exports.validateTeamName = (team) => {
  if (team.length < 5) {
    return false;
  }
  return true;
}
