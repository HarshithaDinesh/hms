const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
email:{
type :String
},
name:{
type :String
},
password:{
    type : String
},
weight:{
    type : String
},
gender:{
    type : String
},
height:{
    type : Number
},
age:{
    type:Number
},

},

{timestamps:true}
)
const UserSchemaModel = mongoose.model("JobPosts" , UserSchema)
module.exports = UserSchemaModel