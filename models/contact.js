module.exports = (sequelize, DataTypes) => {
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

  return Contact;
};
