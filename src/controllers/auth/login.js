import userModel from "../../models/user.model.js"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../constants/index.js";
import { errorResponse, successResponse } from "../../utils/response.js";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const currentUser = await userModel.findOne({ email }).select("+password");
        if (!currentUser) { // null
            errorResponse(res, "Email or password is incorrect.", 404);
        }

        console.log("currentUser-->", currentUser);
        const isPass = await bcrypt.compare(password, currentUser.password); // admin123
        if (!isPass) {
            return res.status(404).json({ message: "Invalid Credationals", status: 404 });
        }

        const token = jwt.sign({ id: currentUser._id }, JWT_SECRET);

        return successResponse(res, 200, "Login Succesfully", { token });
    }
    catch (err) {
        return res.status(500).json({ message: err.message, status: 500 });
    }
}

export default login;