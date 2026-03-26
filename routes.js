const express = require("express");
const authController = require("./controllers/authController");
const userController = require("./controllers/userController");
const adminController = require("./controllers/adminController");
const jwtAdminMiddleware = require("./middleware/jwtAdminMiddleware");

const router = new express.Router();

router.post("/login", authController.login);
router.post("/addIdea", userController.addIdea);
router.get("/getIdeas", jwtAdminMiddleware, adminController.getIdeas);
router.post("/toggleLikeIdea/:ideaId", jwtAdminMiddleware, adminController.toggleLikeIdea);

module.exports = router;