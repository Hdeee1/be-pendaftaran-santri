// src/app.js
require('dotenv').config();
const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API Pendaftaran Santri Aktif!');
});

// Test koneksi DB
db.sequelize.authenticate()
  .then(() => console.log('📡 Terhubung ke database!'))
  .catch(err => console.error('❌ Gagal koneksi DB:', err));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server aktif di http://localhost:${PORT}`);
});

console.log('📦 ENV Loaded:');
console.log({
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
  PORT: process.env.PORT,
});
