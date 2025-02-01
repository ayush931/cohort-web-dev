import express from 'express'
import userRoutes from './routes/user.routes.js'
import courseRoutes from './routes/course.routes.js'
import adminRoutes from './routes/admin.routes.js'
import connectionToDB from './connectingDB.js'
import { config } from 'dotenv'

config()

const app = express()
app.use(express.json())

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/course", courseRoutes)
app.use("/api/v1/admin", adminRoutes)

app.listen(process.env.PORT, async () => {
    await connectionToDB()
    console.log(`App is running on http://localhost:${process.env.PORT}`)
}) 