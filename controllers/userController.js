
  const User = require("../models/userSchema");

const bcript = ("bcryptjs")



//add user to
const addUser = async (req, res) => {
    //encription pasword
    const salt= await bcryptjs.genSalt(10)
    const hashedPassword = await bcryptjs.hash(req.body.password,salt)

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    await newUser.save();
    res.status(201).json({
        _id: newUser.id,
        user: newUser.username,
        email: newUser.email
    })
        

}
module.exports ={addUser}