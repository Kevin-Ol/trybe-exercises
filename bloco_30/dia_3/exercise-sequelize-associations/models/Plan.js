const Plan = (sequelize, DataTypes) => {
  const Plan = sequelize.define("Plan", {
    plan_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coverage: DataTypes.STRING,
    price: DataTypes.DOUBLE,
  }, 
  {
    timestamps: false,
    underscored: true,
    tableName: "Plans"
  });

  Plan.associate = (models) => {
    Plan.hasMany(models.Patient,
      { foreignKey: 'plan_id', as: 'patients' })
  }

  return Plan;
};

module.exports = Plan;
