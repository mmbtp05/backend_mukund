const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('testdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/userModel")(sequelize, DataTypes);

module.exports = db;