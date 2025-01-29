import mongoose, { Schema } from "mongoose";

async function connectDB() {
    await mongoose.connect("mongodb+srv://ayush:111@cluster0.mur2t.mongodb.net/CourseSelling")
}

if (connectDB()) {
    console.log("Connected to DB")
}
else {
    console.log("Failed to connect to DB")
}

const userSchema = new Schema ({
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstName: String,
    lastName: String,
})

const adminSchema = new Schema ({
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = new Schema ({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: Schema.Types.ObjectId
})

const purchaseSchema = new Schema ({
    userId: Schema.Types.ObjectId,
    courseId: Schema.Types.ObjectId
})

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema)
const courseModel = mongoose.model("course", courseSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema)

export { userModel, adminModel, courseModel, purchaseModel }