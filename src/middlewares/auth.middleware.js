import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/index.js";
import { errorResponse } from "../utils/response.js";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            errorResponse(res, "Token is required", 400);
        }

        jwt.verify(token, JWT_SECRET);

        next();

    } catch (err) {

        errorResponse(res, "Invalid token", 500);
    }
}

export default authMiddleware;