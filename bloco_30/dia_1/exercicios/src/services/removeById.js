const plantsModel = require('../model/mongo');
const { db1 } = require('../model/mongo/databaseConfig')

module.exports = async (id) => {
  await plantsModel.removeById(id, 'plants', db1);
}
