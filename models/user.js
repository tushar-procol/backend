module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}

  User.init(
    {
      // Model attributes are defined here
      first_name: {
        type: DataTypes.STRING,
        defaultValue: "Messi",
        allowNull: false,
      },
      last_name: {
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
  return User;
};
