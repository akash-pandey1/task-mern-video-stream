import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import videoRoutes from "./src/routes/video.routes.js";
  
const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.send("working......");
});

connectDB();  

const PORT = process.env.PORT || 5000;  

app.use("/api/videos", videoRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port 5000");
});