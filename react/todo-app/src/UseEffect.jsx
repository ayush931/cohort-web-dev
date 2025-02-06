import { useEffect, useState } from "react"

function UseEffect () {

    const [counter, setCounter] = useState(true)

    useEffect(function () {
        setInterval(function () {
            setCounter(c => !c)
        }, 5000)
    }, [])

    return (
        <div>
            <h1>Hii</h1>
            {counter ? <Counter></Counter> : null}
            <h1>Hello</h1>
        </div>
    )
}

function Counter () {

    const [count, setCount] = useState(0)

    // hooking into lifecycle events (mounting, re-rendering, unmounting) of the react
    useEffect(function () {
        console.log('mount')
        let clock = setInterval(function () {
            console.log("Inside setInterval")
            setCount(function (count) {
                return count + 1
            })
        }, 1000)
        return function () {
            console.log("Unmount")
            clearInterval(clock)
        }
        // console.log("Mounted")
    }, []) // dependency array

    // console.log("Counter")

    function incrementCounter () {
        setCount(count + 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrementCounter}>Increase counter</button>
        </div>
    )
}

export default UseEffect