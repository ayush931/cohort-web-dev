import express from 'express'
import userRoutes from './routes/user.routes.js'
import courseRoutes from './routes/course.routes.js'

const app = express()
const PORT = 4000

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/course", courseRoutes)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})
