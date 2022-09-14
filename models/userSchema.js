const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
 
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
     
  },
  isAamin: {
    type: Boolean,
    default: false,
    }
  
},{timestamp:true,});
const User = mongoose.model('User', userSchema)
module.exports = User;