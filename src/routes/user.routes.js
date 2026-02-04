const express = require("express");
const router = express.Router();

const {
    getUsers,
    getUserById,
    createUser,
} = require("../controllers/user.controller");

//GET /api/users
router.get("/", getUsers);

//GET /api/users/:id
router.get("/:id", getUserById);

//Post /api/users
router.post("/", createUser);

module.exports =router;
