const Books = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  }, 
  {
    updatedAt: false,
    underscored: true,
    tableName: "Books"
  });

  return Books;
};

module.exports = Books;
