const plantsModel = require('../model/mongo');
const { db1 } = require('../model/mongo/databaseConfig')

module.exports = async (id) => {
  const plant = await plantsModel.getById(id, 'plants', db1);
  if (!plant.needsSun) return []
  return plant;
}
