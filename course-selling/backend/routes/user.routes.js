import { Router } from "express"
import { userModel } from "../db.js"
import jwt from "jsonwebtoken"

const JWT_USER_SECRET = "1234567890"
const userRoutes = Router()

userRoutes.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body
    // Todo: Add the zod validation here
    // Todo: Add the bcrypt password 
    // Todo: Add the try catch block
    await userModel.create({ 
        email: email, 
        password: password, 
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

userRoutes.get("/purchases", function (req, res) {
    res.json({
        message: "Welcome to Home page"
    })
})

export default userRoutes