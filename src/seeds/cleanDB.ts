import mongoose from "mongoose";
import connectDB from "../config/connection.js";
import { User, Thought } from "../models/index.js";

const cleanDB = async () => {
  await connectDB();

  // Clear existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  console.log("Database cleared!");
  mongoose.connection.close();
};

cleanDB().catch((err) => {
  console.error(err);
  mongoose.connection.close();
});
