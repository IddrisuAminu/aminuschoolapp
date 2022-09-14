const User = require("../models/userSchema");
const { validate } = require("../config/validator")


const{generateToken}= require("../utils/generateToken")

const bcrypt = "bcrypt";

//add user to
const addUser = async (req, res) => {
  const { username, email, password } = req.body;
  const valid = await validate({ username, email, password });

    if (valid) {
      const hashedpassword = await bcrypt.hash(valid.password,8)
    const saveedUser = await User.create({
      username,
      email,
      password:hashedpassword,
    });
      
      
      if (user) {
        res.status(200).json({
          username: user.username,
          email: user.email,
          id: user.id,
          token: generateToken(User._id)
        });


        
      }
    res.status(400).json({
      success: true,
      message: "invalide data",
      savedUser,
    });
  } else {
    res.status(400).json({
      error: true,
      message: "invalid",
    });
  }

  };
  //user login 
  async function loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        res.status(404).json({
          error: true,
          message: "Acount not found"
        });

      }
      const isValid = await bcrypt.compare(user, password, email);
      if (!isValid) {
        return res.status(404).json({
          error: true,
          message: "invalid password"
        })
      }
      return res.status(200).send({
        success: true,
        message: "User logged in successfully"
      });

    } catch (error) {
      
      console.error(error);
      return res.status(500).json({
        error: true,
        message: "Couldn't login . please try again."
})
    }
}
  // getinh a user
  
const getUsers = async (req, res) => {
  const users = await User.findOne();
  res.status(200).json(users);

  }

module.exports = { addUser,loginUser ,getUsers};
