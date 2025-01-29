import express from 'express'
import userRoutes from './routes/user.routes.js'
import courseRoutes from './routes/course.routes.js'
import adminRoutes from './routes/admin.routes.js'

const app = express()
const PORT = 4000

app.use("/api/v1/user", userRoutes)
app.use("/api/v1/course", courseRoutes)
app.use("/api/v1/admin", adminRoutes)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
}) 
