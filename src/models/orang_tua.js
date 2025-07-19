module.exports = (sequelize, DataTypes) => {
    const OrangTua = sequelize.define("OrangTua", {
      pendaftaran_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      peran: {
        type: DataTypes.ENUM('ayah', 'ibu', 'wali'),
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      nik: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      tgl_lahir: {
        type: DataTypes.DATEONLY,
      },
      status_hidup: {
        type: DataTypes.BOOLEAN,
      },
      pendidikan: {
        type: DataTypes.STRING(50),
      },
      pekerjaan: {
        type: DataTypes.STRING(50),
      },
      penghasilan: {
        type: DataTypes.DECIMAL(15, 2),
      },
    }, {
      tableName: 'orang_tua',
      timestamps: false,
    });
  
    return OrangTua;
  };
  