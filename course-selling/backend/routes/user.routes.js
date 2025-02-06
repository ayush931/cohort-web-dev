import { Router } from "express"
import { courseModel, purchaseModel, userModel } from "../db.js"
import jwt from "jsonwebtoken"
import { config } from "dotenv"
import userMiddleware from "../middlewares/user.middleware.js"
import z from 'zod'
import bcrypt from 'bcrypt'
config()

const JWT_USER_SECRET = process.env.JWT_USER_SECRET
const userRoutes = Router()

userRoutes.post("/signup", async function (req, res) {

    const requiredBody = z.object({
        email: z.string().email().toLowerCase(),
        password: z.string().password().min(5).max(25),
        firstName: z.string().trim(),
        lastName: z.string().trim()
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body)

    if (!parsedDataWithSuccess.success) {
        res.json({
            message: "Incorrect validation",
            error: parsedDataWithSuccess.error
        })
    }

    const { email, password, firstName, lastName } = req.body

    if (!email || !password || !firstName || !lastName) {
        res.status(403).json({
            message: "All fields are required"
        })
    }
    
    const hashedPassword = await bcrypt.hash(password, 10)

    // Todo: Add the try catch block
    await userModel.create({ 
        email: email, 
        password: hashedPassword, 
        firstName: firstName, 
        lastName: lastName 
    })



    res.json({
        message: "Signed up"
    })
})

userRoutes.post("/signin", async function (req, res) {
    const { email, password } = req.body
    
    // Todo: Ideally the password should be hashed, so that it is not stored in plain text and is not vulnerable to attacks

    const user = await userModel.findOne({
        email: email,
        password: password
    })
    console.log(user)

    // Todo Try cookie based authentication

    if (user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_SECRET)

        res.json({
            message: "Signed in",
            token: token
        })

    } else {
        res.status(403).json({
            message: "Invalid email or password"
        })
    }
   
})

userRoutes.get("/purchases", userMiddleware, async function (req, res) {
    const userId = req.userId

    const purchases = await purchaseModel.find({
        userId: userId
    })

    const courseData = await courseModel.find({
        _id: { $in: purchases.map(x => x.courseId) }
    })

    res.json({
        purchases,
        courseData
    })
})

export default userRoutes