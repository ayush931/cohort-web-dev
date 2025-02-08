import { useEffect, useState } from "react"

function Lifecycle () {

    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("component mounted or count change")
    }, [count]) // Runs on mount or the component changed

    useEffect (() => {
        console.log("component mounted")
        return () => {
            console.log("component will unmount")
        }
    }, [])

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Lifecycle