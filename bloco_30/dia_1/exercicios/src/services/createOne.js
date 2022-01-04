const plantsModel = require('../model/mongo');
const { db1 } = require('../model/mongo/databaseConfig')
const waterFrequencyValue = require('./waterFrequencyValue')

module.exports = async (plant) => {
  const { needsSun, size, origin } = plant
  if (needsSun) {
    const waterFrequency = waterFrequencyValue(needsSun, size, origin);
    plant.specialCare = { ...plant.specialCare, waterFrequency }
  }
  await plantsModel.createOne(plant, 'plants', db1);
}
