const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json())

const JWT_TOKEN = 'randomayush'

const users = []

function auth (req, res, next) {
    const token = req.headers.token
    const decodedData = jwt.verify(token, JWT_TOKEN)

    if (decodedData.username) {
        req.username = decodedData.username
        next()
    }
    else {
        res.json({
            message: "You are not logged in"
        })
    }
}

function logger (req, res, next) {
    console.log(req.method + " request came")
    next()
}

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup", logger, function (req, res) {
    const username = req.body.username
    const password = req.body.password

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            res.json({
                message: "Username is already exists"
            })
        }
    }

    users.push({
        username: username,
        password: password
    })

    res.json({
        message: "You have signed up"
    })
})

app.post("/signin", logger, function (req, res) {
    const username = req.body.username
    const password = req.body.password

    let foundUser = null

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i]
        }
    }

    if (!foundUser) {
        res.json({
            message: "Credentials invalid"
        })
        return
    }
    else {
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_TOKEN)

        res.json({
            token: token
        })
    }
})

app.get("/me", logger, auth, function (req, res) {

    const currentUser = req.username
    let foundUser = []

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === currentUser) {
            foundUser = users[i]
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
})

app.listen(4000, () => {
    console.log("App is listening on 4000")
})