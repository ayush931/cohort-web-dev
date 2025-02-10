import { createContext, useContext, useState } from "react"

const BulbContext = createContext()

function BulbProvider ({ children }) {

    const [bulbOn, setBulbOn] = useState(true);

    return <BulbContext.Provider value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn
    }}>
        {children}
    </BulbContext.Provider>
}

function UseContext () {

    return (
        <BulbProvider>
            <LightBulb />
        </BulbProvider>
    )
}

function LightBulb () {
    return (
        <div>
            <BulbState />
            <ToggleBulbState />
        </div>
    )
}

function BulbState () {

    const { bulbOn } = useContext(BulbContext)

    return (
        <div>
            {bulbOn ? "Bulb on" : "Bulb off"}
        </div>
    )
}

function ToggleBulbState () {

    const { bulbOn, setBulbOn } = useContext(BulbContext)

    function toggle () {
        setBulbOn (!bulbOn)
    }
    
    return (
        <button onClick={toggle}>Toggle the bulb</button>
    )
}

export default UseContext