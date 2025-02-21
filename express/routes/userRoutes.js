const express = require("express");
const router = express.Router();
const { getUsers } = require("../controllers/userController.js");

// Route untuk mengambil semua user
router.get("/users", getUsers);

module.exports = router;
