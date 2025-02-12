import { useState } from "react";
import { usePrev } from "./hooks/usePrev";

export function UsePrev () {
    const [state, setState] = useState(0)
    const prev = usePrev(state)

    return (
        <div>
            <p>{state}</p>
            <button onClick={() => setState(curr => curr + 1)}>Click</button>
            <p>The previous value is {prev}</p>
        </div>
    )
}