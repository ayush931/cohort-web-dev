import mongoose from "mongoose";

const connectionToDB = async function connectDB() {
    try {
        const { connection } = await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/CourseSelling")
        if (connection) {
            console.log(`Connected to DB: ${connection.host}`)
        }
    } catch (error) {
        console.log("Failed to connect to DB")
        console.log(error)
    }
}

export default connectionToDB