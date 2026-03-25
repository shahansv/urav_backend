const express = require("express");
const authController = require("./controllers/authController");
const adminController = require("./controllers/adminController");
const jwtAdminMiddleware = require("./middleware/jwtAdminMiddleware");

const router = new express.Router();

router.post("/login", authController.login);
router.post("/addIdea", jwtAdminMiddleware, adminController.addIdea);
router.get("/getIdeas", jwtAdminMiddleware, adminController.getIdeas);

module.exports = router;
