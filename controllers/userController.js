const User = require("../models/userSchema");
const {validate}=require("../config/validator")
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
module.exports = { addUser };
