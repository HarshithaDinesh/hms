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
    