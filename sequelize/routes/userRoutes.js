const express = require("express");
const router = express.Router();
const { getUsers, getById, createUser, updateUser, deleteUser } = require("../controllers/userController.js");
// Route untuk mengambil semua user
router.get("/users", getUsers);
router.get("/users/:id", getById);
router.post("/users/create", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

module.exports = router;
