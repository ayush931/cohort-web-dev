const fs = require('fs')

function readFileAsync () {
    return new Promise(function(resolve, reject) {
        fs.readFile('abvbv.txt', 'utf-8', function(err, data) {
            if (err) {
                reject('File not found')
            }
            else {
                resolve(data)
            }
        })
    })
}

readFileAsync().then(function(data) {
    console.log("File has been read" + data)
}).catch(function(error) {
    console.log("Error")
    console.log(error)
})