// src/models/index.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: true, // boleh true saat debug
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import semua model di sini (contoh pendaftaran)
db.Pendaftaran = require('./pendaftaran')(sequelize, Sequelize.DataTypes);
db.OrangTua = require('./orang_tua')(sequelize, Sequelize.DataTypes);
db.Admin = require('./admin')(sequelize, Sequelize.DataTypes);
db.Logs = require('./logs')(sequelize, Sequelize.DataTypes);

module.exports = db;
