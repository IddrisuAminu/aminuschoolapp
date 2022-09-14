const e = require("express")
const jwt = require(`jsonwebtoken`)


function generatewebToken (id)  {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}
module.exports = generatewebToken