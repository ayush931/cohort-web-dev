import jwt from 'jsonwebtoken'

const JWT_ADMIN_SECRET = process.env.JWT_ADMIN_SECRET

function adminMiddleware (req, res, next) {
    const token = req.headers.token
    const decoded = jwt.verify(token, JWT_ADMIN_SECRET)

    if (decoded) {
        req.adminIn = decoded.id
        next()
    }
    else {
        res.status(403).json({
            message: "You are not signin"
        })
    }
}

// function middleware (password) {
//     return function (req, res, next) {
//         const token = req.headers.token
//         const decoded = jwt.verify(token, password)

//         if (decoded) {
//             req.userId = decoded.id
//             next()
//         }
//         else {
//             res.json({
//                 message: "Error in middleware"
//             })
//         }
//     }
// }

export default adminMiddleware