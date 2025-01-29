import { Router } from "express";
const adminRoutes = Router()

adminRoutes.post("/signin", function (req, res) {
    res.json({
        message: "Signed in"
    })
})

adminRoutes.post("/signup", function (req, res) {
    res.json({
        message: "Signed in"
    })
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