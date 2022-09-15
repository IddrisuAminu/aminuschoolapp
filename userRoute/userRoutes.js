const router = require("express").Router();
const {
  addUser,
  loginUser,
  getUsers,
} = require("../controllers/userController");
// const router = Router();

// router.route("/register",addUser).post("/login", loginUser);
router.post("/register", addUser);
router.post("/login", loginUser);
router.route("/").get(getUsers);

module.exports = router;
