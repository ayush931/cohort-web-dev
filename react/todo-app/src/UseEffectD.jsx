import { useEffect } from "react"
import { useState } from "react"

function UseEffectD () {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    function increment () {
        setCount(count => count + 1)
    }

    function decrement () {
        setCount1(count => count - 1)
    }

    return (
        <div>
            <Counter count={count} count1={count1} />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

function Counter (props) {

    useEffect(function () {
        console.log("mount")

        return function () {
            console.log("unmount")
        }
    }, [])

    useEffect(function () {
        console.log("Count has changed")

        return function () {
            console.log("Cleanup function inside second effect")
        }
    }, [props.count, props.count1])

    return (
        <div>
            Counter 1: {props.count} <br/>
            Counter 2: {props.count1} <br />
        </div>
    )
}

export default UseEffectD