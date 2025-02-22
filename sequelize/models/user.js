const { DataTypes } = require("sequelize");
const sequelize = require("../config/database.js");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false, // Properti ini berada di dalam objek kolom
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Untuk createdAt & updatedAt
});

sequelize.sync() // Hapus tabel lama dan buat ulang
  .then(() => {
    console.log("Database & tabels telah dibuat ulang!");
  })
  .catch((err) => {
    console.error("Gagal sinkronisasi:", err);
  });
module.exports = User;
