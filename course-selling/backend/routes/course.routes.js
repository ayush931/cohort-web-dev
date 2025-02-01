import { Router } from "express"
import userMiddleware from "../middlewares/user.middleware.js"
import { courseModel, purchaseModel } from "../db.js"
const courseRoutes = Router()

courseRoutes.get("/purchase", userMiddleware, async function (req, res) {
    const userId = req.userId
    const courseId = req.body.courseId

    // Todo: Should check that user has already paid the price

    await purchaseModel.create({
        userId: userId,
        courseId: courseId
    })

    res.json({
        message: "You have successfully bought the course"
    })
})

courseRoutes.get("/preview", async function (req, res) {
    
    const courses = await courseModel.find({})

    res.json({
        message: "All the courses",
        courses
    })
})

export default courseRoutes