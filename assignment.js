// create a promisified version of setTimeout

function setTimeoutPromisified (ms) {
    return new Promise (resolve => setTimeout(resolve, ms))
}

function callback () {
    console.log("Promise resolved")
}

setTimeoutPromisified(3000).then(callback)


// create a promisified version of fs.readFile

const fs = require('fs');

function readTheFile (sendTheFinalValue) {
    fs.readFile('./a.txt', 'utf-8', function(err, data) {
        sendTheFinalValue(data)
    })
}

function readFile (fileName) {
    return new Promise(readTheFile)
}

const p = readFile()

function cb (content) {
    console.log(content)
}

p.then(cb)

// create a promisified version of fs.writeFile

function writeTheFile (sendTheValueHere) {
    fs.writeFile('./b.txt', 'Hello World', 'utf-8', function(err, data) {
        sendTheValueHere(data)
    })
}

function writeFile (fileName) {
    return new Promise(writeTheFile)
}

const p1 = writeFile()

function cb1 (content) {
    console.log(content)
}

p1.then(cb1)