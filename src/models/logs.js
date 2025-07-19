module.exports = (sequelize, DataTypes) => {
    const Logs = sequelize.define("Logs", {
      pendaftaran_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status_lama: {
        type: DataTypes.STRING(15),
      },
      status_baru: {
        type: DataTypes.STRING(15),
      },
      updated_by: {
        type: DataTypes.INTEGER, // id dari users_admin
      },
      updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'logs_status',
      timestamps: false,
    });
  
    return Logs;
  };
  