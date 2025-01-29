import mongoose from "mongoose";

const connectionToDB = async function connectDB() {
    await mongoose.connect(process.env.MONGODB_URI)
}

if (connectionToDB()) {
    console.log("Connected to DB")
}
else {
    console.log("Failed to connect to DB")
}

export default connectionToDB