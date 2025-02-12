import { useEffect, useState } from "react"

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setInterval(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}

function UseDebounces () {
    const [inputVal, setInputVal] = useState("")
    const debouncedValue = useDebounce(inputVal, 200)

    function change (e) {
        setInputVal(e.target.value)
    }

    useEffect(() => {
        // Expensive operation
        console.log("expensive operation")
    }, [debouncedValue])

    return (
        <div>
            <input type="text" onChange={change}/>
        </div>
    )
}

export default UseDebounces