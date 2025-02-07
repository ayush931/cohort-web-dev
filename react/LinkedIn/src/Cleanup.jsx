import { useEffect, useState } from "react"

function Cleanup () {

    const [showTimer, setShowTimer] = useState(true)

    useEffect(function () {
        setInterval(function () {
            setShowTimer(currentValue => !currentValue)
        }, 5000)
    }, [])

    return (
        <>  
            {showTimer && <Timer />}
        </>
    )
}

const Timer = () => {

    const [seconds, setSeconds] = useState(0)

    useEffect(function () {
        let clock = setInterval(function() {
            console.log("Time is running")
            setSeconds(prev => prev + 1)
        }, 1000)

        return function () {
            clearInterval(clock)
        }
    }, [])

    return (
        <div>{seconds} second elapsed</div>
    )
}

export default Cleanup