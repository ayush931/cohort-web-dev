import { useRef } from "react"

function useDebounceFn (originalFn) {
    const currentClock = useRef()

    const fn = () => {
        clearTimeout(currentClock.current)
        currentClock.current = setInterval(originalFn, 200)
    }

    return fn
}

function UseDebounce () {
    function sendDataToBackend () {
        fetch("api.amazon.com/search/")
    }

    const debounceFn = useDebounceFn (sendDataToBackend)

    return (
        <>
            <input type="text" name="" id="" onChange={debounceFn}/>
        </>
    )
}

export default UseDebounce