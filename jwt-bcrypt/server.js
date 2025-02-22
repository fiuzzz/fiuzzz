const express = require("express");
const sequelize = require("./config/database.js");
const authRoutes = require("./routes/authRoutes.js");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

console.log("Database connected");
app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
