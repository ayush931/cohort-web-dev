const express = require('express')
const app = express()

let requestCount = 0


function loggerMiddleware (req, res, next) {
    console.log("Method is " + req.method)
    console.log("Host is " + req.hostname)
    console.log("Route is " + req.url)
    console.log(new Date)
}

app.use(loggerMiddleware)

function requestIncreaser (req, res, next) {
    requestCount = requestCount + 1
    req.name = 'ayush123'
    console.log(`Your number of request is ${requestCount}`)
    next()
}

function sumHandler (req, res) {
        const a = parseInt(req.query.a)
        const b = parseInt(req.query.b)
        console.log(req.name)
        res.json({
            addition: a + b
        })
}

app.get("/sum", requestIncreaser, sumHandler)

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

app.listen(3000)