import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
 const connectDB =async () => {
    try {
     const conn = await mongoose.connect(process.env.MONGO_URI as string)
     console.log("DB connected", conn.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
export default connectDB;