const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("learn_backend", "tushargarg", "tushargarg", {
  host: "localhost",
  dialect: "postgres",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contact = require("./contact")(sequelize, DataTypes);
db.user = require("./user")(sequelize, DataTypes, Model);

db.sequelize.sync({ force: true });

module.exports = sequelize;
