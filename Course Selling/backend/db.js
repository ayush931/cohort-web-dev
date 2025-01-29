import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb+srv://ayush:111@cluster0.mur2t.mongodb.net/CourseSelling")

const userSchema = Schema ({
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstName: String,
    lastName: String,
})

const adminSchema = Schema ({
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstName: String,
    lastName: String
})

const courseSchema = Schema ({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: Schema.Types.ObjectId
})

const purchaseSchema = Schema ({
    userId: Schema.Types.ObjectId,
    courseId: Schema.Types.ObjectId
})

const userModel = mongoose.Model("user", userSchema)
const adminModel = mongoose.Model("admin", adminSchema)
const courseModel = mongoose.Model("course", courseSchema)
const purchaseModel = mongoose.Model("purchase", purchaseSchema)

export { userModel, adminModel, courseModel, purchaseModel }