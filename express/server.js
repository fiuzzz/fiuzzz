const express = require("express");
const app = express();
const PORT = 3000;
const router = require("./routes/userRoutes");

app.use(express.json());
app.use("/api/v1", router);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
