const plantsModel = require('../model/mongo');
const { db1 } = require('../model/mongo/databaseConfig')

module.exports = async (id, fields) => {
  const plant = await plantsModel.overwritePlant(id, fields, 'plants', db1);

  return plant;
}
