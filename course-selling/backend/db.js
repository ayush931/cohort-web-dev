import mongoose, { Schema } from "mongoose";
import jwt from 'jsonwebtoken'

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

userSchema.methods = {
    generateJwtToken: async function () {
        return await jwt.sign(
            {_id: this.id, email: this.email, firstName: this.firstName, lastName: this.lastName},
            process.env.JWT_USER_SECRET,
            {
                expiresIn: '1hr'
            }
        )
    }
}

const userModel = mongoose.model("user", userSchema)
const adminModel = mongoose.model("admin", adminSchema)
const courseModel = mongoose.model("course", courseSchema)
const purchaseModel = mongoose.model("purchase", purchaseSchema)

export { userModel, adminModel, courseModel, purchaseModel }