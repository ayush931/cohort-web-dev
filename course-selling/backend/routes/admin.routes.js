import { Router } from "express";
const adminRoutes = Router()
import { adminModel } from "../db.js";
import jwt from 'jsonwebtoken'

const JWT_ADMIN_SECRET = "abcdef"

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


adminRoutes.post("/course", function (req, res) {
    res.json({
        message: "Signed in"
    })
})

adminRoutes.put("/course", function (req, res) {
    res.json({
        message: "Signed in"
    })
})

adminRoutes.get("/course/bulk", function (req, res) {
    res.json({
        message: "Signed in"
    })
})

export default adminRoutes