const Patient = (sequelize, DataTypes) => {
  const Patient = sequelize.define("Patient", {
    patient_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    fullname: DataTypes.STRING,
    planId: { type: DataTypes.DOUBLE, foreignKey: true },
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: "Patients"
  });

  Patient.associate = (models) => {
    Patient.belongsTo(models.Plan,
      { foreignKey: 'plan_id', as: 'plans' })
  }

  return Patient;
};

module.exports = Patient;
