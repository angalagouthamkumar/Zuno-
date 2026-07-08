const express = require("express");
const router = express.Router();
const { registerUser, loginUser, refreshSession, logoutUser, getCurrentUser } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/refresh", refreshSession);
router.post("/logout", logoutUser);
router.get("/me", authMiddleware, getCurrentUser);

module.exports = router;