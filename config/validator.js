const yup = require("yup");
function validate(data) {
  const userSchema = yup.oject().shape({
    username: yup.string().require("username must be fill").main(3).max(20),
    email: yup.string().require("email must be must be fill").main(3).max(20),
    password: yup
      .string()
      .require("password must be fill")
      .main("username must be fill")
      .main(3)
      .max(20),
  });
  return userSchema.validate(data);
}
module.exports = { validate };
