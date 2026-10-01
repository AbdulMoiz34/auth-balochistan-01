import express from "express";

import { PORT } from "./constants/index.js"
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import studentRoutes from "./routes/student.routes.js";

const app = express();

app.get("/api", (_, res) => res.send("Api is running"));
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

});