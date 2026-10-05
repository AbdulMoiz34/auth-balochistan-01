import studentModel from "../../models/student.model.js";
import { successResponse } from "../../utils/response.js";

const getAll = async (req, res) => {
    try {

        const students = await studentModel.find({});

        return successResponse(res, 200, "Students fetched successfully.", students);

    } catch (err) {


        return res.status(500).json({ message: err.message, status: 500 });
    }
}

export default getAll;