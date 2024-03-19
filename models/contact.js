const sequelize = require("./index");

const { DataTypes } = require("sequelize");

const Contact = sequelize.define(
  "contacts",
  {
    // Model attributes are defined here
    permanent_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Contact === sequelize.models.Contact); // true

module.exports = Contact;
