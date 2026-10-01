import userModel from "../../models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../constants/index.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const currentUser = await userModel.findOne({ email });
        if (!currentUser) { // null
            return res.status(404).json({ message: "Invalid Credationals", status: 404 });
        }

        const isPass = await bcrypt.compare(password, currentUser.password);
        if (!isPass) {
            return res.status(404).json({ message: "Invalid Credationals", status: 404 });
        }

        const token = jwt.sign({ id: currentUser._id }, JWT_SECRET);

        return res.status(200).json({ message: "Login Succesfully", status: 200, token });
    }
    catch (err) {
        return res.status(500).json({ message: err.message, status: 500 });
    }
}

export default login;