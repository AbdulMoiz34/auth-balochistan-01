import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

export default mongoose.model("Student", studentSchema);