import { Router } from "express"
const userRoutes = Router()

userRoutes.get("/signin", function (req, res) {
    res.json({
        message: "Welcome to Home page"
    })
})

userRoutes.get("/signup", function (req, res) {
    res.json({
        message: "Welcome to Home page"
    })
})

userRoutes.get("/purchases", function (req, res) {
    res.json({
        message: "Welcome to Home page"
    })
})

export default userRoutes