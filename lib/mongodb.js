import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://investhub:investhub123@cluster0.ohyqq4u.mongodb.net/investhub");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
};
