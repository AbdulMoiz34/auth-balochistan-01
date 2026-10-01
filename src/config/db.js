import mongoose from "mongoose";
import { MONGO_URI } from "../constants/index.js";

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed");
        console.log(error.message);
    }
};

export default connectDB;