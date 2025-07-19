module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("Admin", {
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
      password_hash: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'users_admin',
      timestamps: false,
    });
  
    return Admin;
  };
  