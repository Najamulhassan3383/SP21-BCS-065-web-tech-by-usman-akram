const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://najm:najm@cluster0.crfdbx1.mongodb.net/"
  );

  console.log(`MongoDB Connected`);
};

module.exports = connectDB;
