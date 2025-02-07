const express = require('express')
const app = express()

// will take input from the user like http://localhost:3000/sum/?a=2&b=5

let requestCount = 0

app.get("/sum", function (req, res) {
    requestCount = requestCount + 1
    console.log(`Request count is ${requestCount}`)
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        addition: a + b
    })
})

app.get("/substract", function (req, res) {
    requestCount = requestCount + 1
    console.log(`Request count is ${requestCount}`)
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        substraction: a - b
    })
})

app.get("/multiply", function (req, res) {
    requestCount = requestCount + 1
    console.log(`Request count is ${requestCount}`)
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        multiplication: a * b
    })
})

app.get("/divide", function (req, res) {
    requestCount = requestCount + 1
    console.log(`Request count is ${requestCount}`)
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        division: a / b
    })
})

// Will take input from the user like http://localhost:3000/addition/5/2

app.get("/addition/:firstArg/:secondArg", function (req, res) {
    requestCount = requestCount + 1
    console.log(`Request count is ${requestCount}`)
    const a = parseInt(req.params.firstArg)
    const b = parseInt(req.params.secondArg)

    res.json({
        addition: a + b
    })
})

app.get("/substraction/:firstArg/:secondArgs", function (req, res) {
    requestCount = requestCount + 1
    console.log(`Request count is ${requestCount}`)
    const a = parseInt(req.params.firstArg)
    const b = parseInt(req.params.secondArgs)

    res.json({
        substraction: a - b
    })
})

app.get("/multiplication/:firstArg/:secondArgs", function (req, res) {
    requestCount = requestCount + 1
    console.log(`Request count is ${requestCount}`)
    const a = parseInt(req.params.firstArg)
    const b = parseInt(req.params.secondArgs)

    res.json({
        multiplication: a * b
    })
})

app.get("/division/:firstArg/:secondArgs", function (req, res) {
    requestCount = requestCount + 1
    console.log(`Request count is ${requestCount}`)
    const a = parseInt(req.params.firstArg)
    const b = parseInt(req.params.secondArgs)

    res.json({
        division: a / b
    })
})

app.listen(3000, () => {
    console.log("App is listening on 3000")
})