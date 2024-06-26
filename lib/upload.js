// lib/upload.js
import multer from "multer";
import GridFsStorage from "multer-gridfs-storage";
import dotenv from "dotenv";
import { connectMongoDB } from "./mongodb";

dotenv.config();

const storage = new GridFsStorage({
  url: process.env.MONGODB_URI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename,
        bucketName: "images",
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({ storage });

export const uploadImage = upload.single("image");
export const connectGridFs = async (req, res, next) => {
  try {
    await connectMongoDB();
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to connect to MongoDB" });
  }
};