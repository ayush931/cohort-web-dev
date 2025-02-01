import { Router } from "express";
const adminRoutes = Router()
import { adminModel, courseModel } from "../db.js";
import jwt from 'jsonwebtoken'
import { JWT_ADMIN_SECRET } from "../config.js";
import adminMiddleware from "../middlewares/admin.middleware.js";

adminRoutes.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body
    // Todo: Add the zod validation here
    // Todo: Add the bcrypt password 
    // Todo: Add the try catch block
    await adminModel.create({ 
        email: email, 
        password: password, 
        firstName: firstName, 
        lastName: lastName 
    })
    res.json({
        message: "Signed up as an admin"
    })
})

adminRoutes.post("/signin", async function (req, res) {
    const { email, password } = req.body
    
    // Todo: Ideally the password should be hashed, so that it is not stored in plain text and is not vulnerable to attacks

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })
    console.log(admin)

    // Todo Try cookie based authentication

    if (admin) {
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_SECRET)

        res.json({
            message: "Signed up as an admin",
            token: token
        })

    } else {
        res.status(403).json({
            message: "Invalid email or password"
        })
    }
    
})


adminRoutes.post("/course", adminMiddleware, async function (req, res) {
    const adminId = req.adminId
    const { title, description, price, imageUrl, creatorId } = req.body

    const course = await courseModel.create({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        creatorId: adminId
    })

    if (course) {
        res.json({
            message: "Course created",
            courseId: course._id
        })
    }
    else {
        res.json({
            message: "Something wrong while creating course"
        })
    }
})

adminRoutes.put("/course", adminMiddleware, async function (req, res) {
    const adminId = req.adminId
    const { title, description, price, imageUrl, courseId } = req.body

    const course = await courseModel.updateOne({
        _id: courseId,
        adminId: creatorId
    }, {
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        creatorId: adminId
    })

    if (course) {
        res.json({
            message: "Course updated successfully",
            courseId: course._id
        })
    }
    else {
        res.json({
            message: "Failed to update the course"
        })
    }
})

adminRoutes.get("/course/bulk", adminMiddleware, async function (req, res) {
    const adminId = req.adminId

    const courses = await adminModel.find({
        creatorId: adminId
    })

    if (course) {
        res.json({
            message: "Got all the course",
            courses
        })
    }
    else {
        res.status(403).json({
            message: 'Unable to fetch the course'
        })
    }
})

export default adminRoutes