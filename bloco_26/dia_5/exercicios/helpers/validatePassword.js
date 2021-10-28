exports.validatePassword = (password) => {
  if (typeof password !== 'number') {
    return false;
  }
  return password.toString().length >= 4 && password.toString().length <= 8;
}