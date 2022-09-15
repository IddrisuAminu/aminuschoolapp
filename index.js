const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDb");
const userRoute = require("./userRoute/userRoutes");

const morgan = require("morgan");
dotenv.config();
const app = express();
connectDb();
// middleware
app.use(express.json());
app.use("/api/users", userRoute);

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("<>Welcome to Lassia Tuoluu SHS>");
});

const PORT = process.env.PORT || 3180;

app.listen(PORT, () => console.log(`server is running on port: ${PORT}`));
