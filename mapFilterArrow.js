// map, filter, and arrow function

const input = [1, 2, 3, 4, 5]

const newArray = []

for (let i = 0; i < input.length; i++) {
    newArray.push(input[i] * 2)
}

console.log(newArray)

// using map

function transform (i) {
    return i * 2
}

const ans = input.map(transform)
console.log(ans)

// Filter

const arr = [1, 2, 3, 4, 5]

const newArr = []

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        newArr.push(arr[i])
    }
}

console.log(newArr)

// using filter

const answer = arr.filter(function (n) {
    if (n % 2 == 0) {
        return true
    }
    else {
        return false
    }
})

console.log(answer)

const names = ["Ayush", "Harkirat", "Ram"]

const filterName = names.filter(function (n) {
    if (n.startsWith("A")) return true
    else return false
})

console.log(filterName)

// create a map function that takes an array and a transform function as an input and returns transformed array as an output

const map = (arr, fn) => {
    const transformed = []
    for (let i = 0; i < arr.length; i++) {
        transformed.push(fn(arr[i]))
    }
    return transformed
}