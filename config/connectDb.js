const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  console.log("database is active");
};
module.exports = connectDb;
