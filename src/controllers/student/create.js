import { JWT_SECRET } from "../../constants/index.js";
import studentModel from "../../models/student.model.js";
import jwt from "jsonwebtoken";

const create = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; //moiz.split() ["m" , "o" , i]
        console.log(token);
        if (!token) {
            return res.status(400).json({ message: "Login is required.", status: 400 });
        }

        jwt.verify(token, JWT_SECRET);
        const { username, age, course, email } = req.body;
        // if (!username) {
        //     return res.status(400).json({ message: "Username is required", status: 400 });
        // }

        const stdData = await studentModel.create({ username, age, course, email });


        return res.status(201).json({ message: "Student created successfully", data: stdData });

    } catch (err) {
        return res.status(500).json({ message: err.message, status: 500 });
    }
}

export default create;