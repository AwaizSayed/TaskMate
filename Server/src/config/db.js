const mongoose = require("mongoose");
const TodoModel = require("../models/todosSchema");
const dotenv = require("dotenv");

dotenv.config();

async function connectToDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    if (conn) {
      console.log("Database Connected");
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectToDB;
