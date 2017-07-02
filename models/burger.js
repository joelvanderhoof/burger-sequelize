module.exports = (sequelize, DataTypes) => {
  var burgerSequelize = sequelize.define("burgerSequelize", {
    //   id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     authIncrement: true
    //   },
    burger_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
        type: DataTypes.BOOLEAN,  
      default: false
    }
  });
  // Add another "configuration" obect as an argument to set up an association to Authors
  // Example: http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelstaskjs
//   burgerSequelize.association = (models) => {
//     burgerSequelize.belongsTo(models.customer, 
//     {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   }

  return burgerSequelize;
};


