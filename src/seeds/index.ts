import mongoose from "mongoose";
import connectDB from "../config/connection.js";
import { User, Thought } from "../models";
import { users, thoughts } from "./data";

const seedData = async () => {
  await connectDB();

  // Clear existing data
  await User.deleteMany({});
  await Thought.deleteMany({});

  // Insert new data
  await User.insertMany(users);
  await Thought.insertMany(thoughts);

  console.log("Database seeded!");
  mongoose.connection.close();
};

seedData().catch((err) => {
  console.error(err);
  mongoose.connection.close();
});
