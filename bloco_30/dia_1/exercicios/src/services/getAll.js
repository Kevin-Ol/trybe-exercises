const plantsModel = require('../model/mongo');
const { db1 } = require('../model/mongo/databaseConfig')

module.exports = async () => {
  const plants = await plantsModel.getAll('plants', db1);

  return plants;
}
