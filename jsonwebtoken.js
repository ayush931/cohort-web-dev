const express = require("express")
const jwt = require('jsonwebtoken')
const app = express()

const JWT_TOKEN = 'randomayush'
app.use(express.json())

const users = []

app.post("/signup", function (req, res) {
    const username = req.body.username
    const password = req.body.password

    if (users.find(u => u.username === username)) {
        res.json({
            message: "You have already signed in"
        })
        return
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You have signed up"
    })

    console.log(users)
})

app.post("/signin", function (req, res) {
    const username = req.body.username
    const password = req.body.password

    const foundUser = users.find(function (u) {
        if (u.username == username && u.password == password) {
            return true
        }
        else {
            return false
        }
    })

    if (foundUser) {
        const token = jwt.sign({
            username: username
        }, JWT_TOKEN)
        foundUser.token = token
        res.json({
            token: token
        })
    }
    else {
        res.status(403).json({
            message: "Invalid username or password"
        })
    }
    console.log(users)
})

app.get("/me", function (req, res) {
    const token = req.headers.token
    const decodeInformation = jwt.verify(token, JWT_TOKEN)
    const username = decodeInformation.username
    let foundUser = null

    for (let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            foundUser = users[i]
        }
    }

    if (foundUser) {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else {
        res.json({
            message: "Invalid token"
        })
    }
}) 

app.listen(3000, () => {
    console.log("App is listening on 3000")
})