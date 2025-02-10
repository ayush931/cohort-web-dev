import { useRef, useState } from "react"

function Clock () {

    const [count, setCount] = useState(0)
    const timer = useRef()

    function startTimer () {
        let value = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        timer.current = value
    }

    function stopTimer () {
        clearInterval(timer.current)
        console.log(timer.current)
    }

    return (
        <div>
            {count}
            <br />
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
        </div>
    )
}

export default Clock