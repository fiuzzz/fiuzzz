const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/api/v1", userRoutes);

sequelize.sync().then(() => {
    console.log("Database connected");
    app.listen(3000, () => console.log("Server berjalan di http://localhost:3000"));
});
