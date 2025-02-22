const User = require("../models/user.model");
const bcrypt = require("bcrypt");

// @desc   Register a new user
// @route  POST /api/users/register
// @access Public
const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, role } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user in DB
    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    res
      .status(201)
      .json({ message: "User registered successfully", userId: user._id });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// parvaiz 

const express = require("express")
const router = express.Router()
const userModel = require("../Schema/UserSchema")
const secretKey = "abcde";

const bcrypt = require("bcrypt")
const { body, validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")



router.post("/Register", body('email').isEmail(), async (req, res) => {
    console.log(req.body)

         let { name, email, password } = (req.body)
         if (!name || !email || !password) {
             res.send("fields are missing")
         }
         const error = validationResult(req)
         if (!error.isEmpty()) {
             return res.send("invalid email")
         }
       
         let pass = password.toString()
         let salt = await bcrypt.genSalt(10)
         let hashPassword = await bcrypt.hash(pass, salt);
         password = hashPassword
         console.log("pass", password)
         try {
             const user = new userModel({ name, email, password })
             const result = await user.save()
             let token = jwt.sign({ id: user._id }, secretKey)
             return res.json({ result: "success", token })
         } catch (err) {
             res.json(err)
         }
     })

     
 router.post("/login", async (req, res) => {
         const { email, password } = (req.body)
         if (!email || !password) {
             res.send("fileds are missing")
         }
         try {
             const user = await userModel.findOne({ email: email });
             if (user == null) {
                 res.send("no user found")
             } else {
                 const hashedpassword = user.password
                 let pass = password.toString()
                 let result = bcrypt.compareSync(pass, hashedpassword)
                 if (result == true) {
                     let token = jwt.sign({ id: user._id }, secretKey)
                     return res.json({ result: "success", id: user._id, token })
                 } else {
                     res.send("incorrect password")
                 }
             }
         }
         catch (err) {
             res.send(err)
         }
     })
module.exports = router
    

module.exports = { registerUser };
