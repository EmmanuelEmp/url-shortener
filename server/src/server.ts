import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors from "cors";
import urlRoutes from "./routes/urlRoutes";
dotenv.config();

connectDB()
const app = express();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api", urlRoutes);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})