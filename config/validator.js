const yup = require("yup");
function validate(data) {
  const userSchema = yup.object().shape({
    username: yup.string().required("username must be fill").min(3).max(20),
    email: yup.string().required("email must be must be fill").min(3).max(50),
    password: yup.string().required("password must be fill").min(3).max(20),
  });
  return userSchema.validate(data);
}
module.exports = { validate };
