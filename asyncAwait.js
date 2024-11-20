function setTimeoutPromisified (duration) {
    return new Promise ((resolve) => {
        setTimeout(resolve, duration)
    })
}

console.log('Going inside the callback hell')

async function solve () {
    await setTimeoutPromisified(1000)
    console.log('Hii')
    await setTimeoutPromisified(3000)
    console.log('Hii there')
    await setTimeoutPromisified(5000)
    console.log('Hi there hello')
}

solve()

console.log('Outside the callback hell')

/**
 * Going inside the callback hell
 * Outside the callback hell
 * Hii
 * Hii there
 * Hi there hello
 */