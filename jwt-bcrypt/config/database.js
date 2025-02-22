const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tuto", "Faiz", "Bismillah", {
    host: "localhost",
    dialect: "mysql"
});

module.exports = sequelize;
