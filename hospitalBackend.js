const express = require('express');
const app = express()

const users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json())

app.get("/", function (req, res) {
    const johnKidneys = users[0].kidneys
    const numberOfKidneys = johnKidneys.length
    let numberOfHealthyKidneys = 0
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        message: "Done!"
    })
})

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true
    }
    res.json({})
})

function isThereAnyUnhealthyKidneys () {
    let atleastOneUnhealthyKidney = 0
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if (!users[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true
        }
    }
    return atleastOneUnhealthyKidney
}

// removing all the unhealthy kidneys

app.delete("/", function (req, res) {
    if (atleastOneUnhealthyKidney()) {
        let newKidneys = []
        for (let i = 0; i < users[0].kidneys.length; i++) {
            if (users[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys
        res.json({
            message: "Done"
        })
    }
    else {
        res.status(411).json({
            message: "You don't have unhealthy kidney"
        })
    }
})

app.listen(3000)