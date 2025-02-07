import { useEffect, useState } from "react"

function Button () {

    const [currentTab, setCurrentTab] = useState("feed")

    useEffect (function () {
        // send the backend request to get the data for the tab
        console.log("Get the data from the backend for the current tab " + currentTab)
    }, [currentTab])

    return (
        <>
            <button onClick={function () {
                setCurrentTab("feed")
            }} style={{ color: currentTab == "feed" ? "red" : "black" }}>Feed</button>
            <button onClick={function () {
                setCurrentTab("notification")
            }} style={{ color: currentTab == "notification" ? "red" : "black" }}>Notifications</button>
            <button onClick={() => setCurrentTab("message")} style={{ color: currentTab == "message" ? "red" : "black" }}>Messages</button>
            <button onClick={() => setCurrentTab("jobs")} style={{ color: currentTab == "jobs" ? "red" : "black" }}>Jobs</button>
        </>
    )
}

export default Button