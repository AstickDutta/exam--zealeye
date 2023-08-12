import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_url);
    console.log("db connected");
  } catch (error) {
    console.log("mongoDB error");
  }
};

export default connectDB;
