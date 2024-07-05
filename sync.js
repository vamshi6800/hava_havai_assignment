const { sequelize, Country, City, Airport } = require("./models");

async function syncDatabase() {
  await sequelize.sync({ force: true });
  console.log("Database synced!");
}

syncDatabase();
