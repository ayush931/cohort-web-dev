import { Router } from "express"
const courseRoutes = Router()

courseRoutes.get("/purchase", function (req, res) {
    res.json({
        message: "Welcome to Home page"
    })
})

courseRoutes.get("/preview", function (req, res) {
    res.json({
        message: "Welcome to Home page"
    })
})

export default courseRoutes