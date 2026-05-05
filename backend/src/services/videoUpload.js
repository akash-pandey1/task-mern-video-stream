import multer from "multer";
import { GridFsStorage } from "multer-gridfs-storage";
import dotenv from "dotenv";
dotenv.config();

////////NOrmal upoad working...................
const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads/");
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        },
    });
    
    export const upload = multer({ storage: storage });


/////stream part pending ........................
const streamStorage = new GridFsStorage({
    url : process.env.MONGO_URI,
    file: (req, file) => {
        return {
            bucketName: "uploads",
            filename: file.originalname
        }
       
    }
})

export const uploadStream = multer({ storage: streamStorage });