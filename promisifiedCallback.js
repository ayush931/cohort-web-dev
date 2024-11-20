function setTimeoutPromisified (duration) {
    return new Promise ((resolve) => {
        setTimeout(resolve, duration)
    })
}

// promise chaining

setTimeoutPromisified(1000).then(function () {
    console.log('Hii')
    setTimeoutPromisified(3000).then(function () {
        console.log("Hii there")
        setTimeoutPromisified(5000).then(function () {
            console.log('Hii there hello')
        })
    })
})

// Alternate method

setTimeoutPromisified(1000).then(function() {
    console.log("Hii")
    return setTimeoutPromisified(3000)
}).then(function() {
    console.log("Hii there")
    return setTimeoutPromisified(5000)
}).then(function() {
    console.log("Hii there hello")
})