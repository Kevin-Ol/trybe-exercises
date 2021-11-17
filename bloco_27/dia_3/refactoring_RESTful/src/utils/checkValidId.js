const { ObjectId } = require('mongodb');

module.exports = (id) => ObjectId.isValid(id);
