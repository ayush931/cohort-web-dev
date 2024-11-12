// for reading the file

const fs = require('fs')

// const content = fs.readFileSync('./readFile.txt', 'utf-8')
// console.log(content)

const content = fs.readFileSync('./readFile.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log("Cannot read the file", err)
    }
    else {
        console.log("Read the file successfully", data)
    }
})

console.log(content)

// for writing the file

fs.writeFile('./b.txt', 'Hello world', 'utf-8', (err, data) => {
    if (err) {
        console.log('Error while writing file', err)
    }
    else {
        console.log('File updated successfully')
    }
})

// for cleaning the file

function cleanFile (filePath) {
    fs.writeFile(filePath, '', 'utf-8', (err, data) => {
        if (err) {
            console.log('Cannot clean the file', err)
        }
        else {
            console.log('Cleaned the file successfully')
        }
    })
}

cleanFile('./b.txt')