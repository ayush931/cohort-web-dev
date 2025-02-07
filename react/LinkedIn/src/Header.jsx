import { useEffect, useState } from "react"

function Header () {

    const [count, setCount] = useState(0)

    function increaseCount () {
        console.log("Increase count called" + count)
        setCount(function (currentValue) {
            return currentValue + 1
        })
    }

    function decreaseCount () {
        console.log("Decrement count called")
        setCount(count => count - 1)
    }

    useEffect(function () {
        console.log("set interval called")
        setInterval(increaseCount, 1000)
    }, [])

    useEffect (function () {
        console.log("Count is changing every second " + count)
    }, [count])

    return (
        <div>
            <div style={{ background: "red", borderRadius: 10, width: 20, height: 25, marginLeft: 10, paddingTop: 5, paddingLeft: 10 }}>
                {count}
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGK5BU28anRxIWS7oTYBFUyFJvK1XfDylxqQ&s" alt="" />
        </div>
    )
}

export default Header