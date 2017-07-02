module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define("customer", 
  {
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            len: [1]
        }
    }
  });

  customer.association = (models) => {
    customer.hasMany(models.burgers, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  }
  return customer;
};
