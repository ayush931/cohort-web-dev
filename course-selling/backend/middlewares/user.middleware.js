import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()
const JWT_USER_SECRET = process.env.JWT_USER_SECRET

function userMiddleware (req, res, next) {
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_USER_SECRET)

    if (decoded) {
        req.userId = decoded.id
        next()
    }
    else {
        res.status(403).json({
            message: "You are not signed in"
        })
    }
}

export default userMiddleware