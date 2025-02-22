const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/users.controller");

const router = express.Router();

router.post("/register", registerUser); // API route for user registration
router.post("/login", loginUser); // API route for user registration
router.post("/logout", logoutUser); // API route for user registration

module.exports = router;
