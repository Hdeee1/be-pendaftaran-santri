// src/models/pendaftaran.js
module.exports = (sequelize, DataTypes) => {
    const Pendaftaran = sequelize.define("Pendaftaran", {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nisn: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
      },
      status: {
        type: DataTypes.ENUM('daftar', 'verifikasi', 'diterima', 'ditolak'),
        defaultValue: 'daftar',
      },
      // tambahkan field lain sesuai tabel kamu
    });
  
    return Pendaftaran;
  };