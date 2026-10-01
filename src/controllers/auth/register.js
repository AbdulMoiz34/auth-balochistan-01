import jwt from "jsonwebtoken";
import userModel from "../../models/user.model.js";
import bcrypt from "bcryptjs";
import { JWT_SECRET } from "../../constants/index.js";

const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const isUserExist = await userModel.findOne({ email });

        if (isUserExist) {
            return res.status(400).json({ message: "User already registered..", status: 400 });
        }
        const hashPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({ email, password: hashPassword });

        const token = jwt.sign({ id: user._id }, JWT_SECRET);

        return res.status(201).json({
            message: "user registered succesfully",
            status: 201,
            token
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: err.message, status: 500 })
    }
}

export default register;