import { useState } from "react"

function UseStates () {
    return (
        <div style={{ background: "#dfe6e9", height: "100vh" }}>
            <ToggleMessage />
        </div>
    )
}

function ToggleMessage () {

    const [isVisible, setIsVisible] = useState(false) // defining a new state variable
    // When the value of state variable changes, the component that using the state variable re-renders.
    console.log("Re-rendering")
    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>Toggle message</button>
            {isVisible && <p>This message is rendered conditionally</p>}
        </div>
    )
}

export default UseStates