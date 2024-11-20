// callback hell

setTimeout(function() {
    console.log('Hii');
    setTimeout(function() {
        console.log('Hii there');
        setTimeout(function() {
            console.log("Hii hello there")
        }, 5000)
    }, 3000)
}, 1000)

console.log("outside callback hell")

// Alternate solution does not have callback hell

function step3Done () {
    console.log('Hii hello there')
}

function step2Done () {
    console.log('Hii there')
    setTimeout(step3Done, 5000)
}

function step1Done () {
    console.log("Hii")
    setTimeout(step2Done, 3000)
}

setTimeout(step1Done, 1000)