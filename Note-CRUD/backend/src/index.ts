import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import noteRoutes from "./routes/notes.routes";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/notes", noteRoutes);

// MongoDB Connection
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("connection error :====>", err));
