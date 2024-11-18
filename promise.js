function random (resolve) { // resolve is also a function
    setTimeout(resolve, 3000)
}

const p = new Promise(random) // return you something eventually

// using the eventual value returned by the promise
function callback () {
    console.log("Promise succeded")
}

p.then(callback)
