const Patient_surgery = (sequelize, DataTypes) => {
  const Patient_surgery = sequelize.define("Patient_surgeries",
  {}, 
  { timestamps: false });

  Patient_surgery.associate = (models) => {
    models.Patient.belongsToMany(models.Surgery, {
      as: 'surgeries',
      through: Patient_surgery,
      foreignKey: 'patient_id',
      otherKey: 'surgery_id'
    });

    models.Surgery.belongsToMany(models.Patient, {
      as: 'patients',
      through: Patient_surgery,
      foreignKey: 'surgery_id',
      otherKey: 'patient_id'
    });
  }

  return Patient_surgery;
};

module.exports = Patient_surgery;
