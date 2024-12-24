const express = require("express")
const app = express()

function hasEnoughAge (age) {
    if (age >= 14) {
        return true
    }
    else {
        return false
    }
}

function isOldEnoughMiddleware (req, res, next) {
    const age = req.query.age
    if (age >= 14) {
        next()
    }
    else {
        res.json({
            message: "You are not old enough"
        })
    }
}

app.get("/ride1", function (req, res) {
    if (hasEnoughAge(req.query.age)) {
        res.json({
            message: "You have rided the ride 1"
        })
    }
    else {
        res.status(411).json({
            message: "You don't have enough age"
        })
    }
})

app.use(isOldEnoughMiddleware)

app.get("/ride2", function (req, res) {
    res.json({
        message: "You have rided the ride 2"
    })
})

app.listen(3000, () => {
    console.log("App is listening on 3000")
})