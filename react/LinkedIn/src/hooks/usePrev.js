import { useEffect, useRef } from "react";

export function usePrev (value) {
    const ref = useRef()
    console.log("Re-render happens with the new value " + value) // 1st runs this

    useEffect(() => {
        console.log("Updated the ref to be " + value) // Finally run this
        ref.current = value
    }, [value])

    console.log("returned " + ref.current) // 2nd this will run
    return ref.current
}

// It returns first, effect get's called later