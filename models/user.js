const sequelize = require("./index");

const { DataTypes, Model } = require("sequelize");

class User extends Model {}

User.init(
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      defaultValue: "Messi",
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "user", // We need to choose the model name
  }
);

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

module.exports = User;
