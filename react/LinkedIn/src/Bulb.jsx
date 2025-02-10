import { useState } from "react"

function Bulb () {
    return (
        <div>
            <LightBulb />
        </div>
    )
}

function LightBulb () {

    const [bulbOn, setBulbOn] = useState(true)

    // bulbOn is the props to the BulbState component
    // bulbOn, setBulbOn is the props to the ToggleBulbState component
    return (
        <div>
            <BulbState bulbOn={bulbOn} />
            <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
        </div>
    )
}

function BulbState ({ bulbOn }) {

    return (
        <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>
    )
}

function ToggleBulbState ({ setBulbOn, bulbOn }) {

    function toggle () {
        setBulbOn(!bulbOn)
    }

    return (
        <button onClick={toggle}>Toggle the bulb</button>
    )
}

export default Bulb