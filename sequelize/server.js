const express = require("express");
const sequelize = require("./config/database.js");
const userRoutes = require("./routes/userRoutes.js");

const app = express();
app.use(express.json());
app.use("/api/v1", userRoutes);

app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
