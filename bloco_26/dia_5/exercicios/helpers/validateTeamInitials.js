exports.validateTeamInitials = (initials) => {
  if (initials !== initials.toUpperCase() || initials.length > 3) {
    return false;
  }
  return true;
};
