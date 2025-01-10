const express = require('express')
const app = express()

app.use(express.json()) // send data in json format

app.get("/", function (req, res) {
    res.send("Hello")
})

app.post("/sum", function (req, res) {
    console.log(req.body)
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)

    res.json({
        addition: a + b
    })
})

app.listen(3000)