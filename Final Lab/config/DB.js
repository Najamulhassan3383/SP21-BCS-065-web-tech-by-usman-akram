const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://najm:najm@cluster0.crfdbx1.mongodb.net/",
    {
      useNewUrlParser: true,
    }
  );

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
