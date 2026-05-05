import express from "express";
import { upload, uploadStream } from "../services/videoUpload.js";

const router = express.Router();

router.post("/upload", upload.single("video") , (req, res) => {
    res.send({ url: `/uploads/${req.file.originalname}` });
});

router.post("/uploadStream", uploadStream.single("video") , (req, res) => {
    res.json(
        {
            message: "Video uploaded successfully",
            id: req.file.id
        }
    )
});

router.get("/video/:id", async (req, res) => {
    try {
        const video = await gfs.files.findOne({ _id: req.params.id });
        const readStream = gfs.createReadStream(video.filename);
        readStream.pipe(res);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


export default router;