import { useRef } from "react"

function UseRef() {

    // useRef -> reference to a value, such that when you change the value, the component will not re-render
    const inputRef = useRef()

    function focusOnInput () {
        inputRef.current.focus()
    }

    return (
        <div>
            <label htmlFor="">Sign up</label>
            <input type="text" name="" id="" ref={inputRef}/>
            <input type="text" name="" id="" />
            <button onClick={focusOnInput}>Submit</button>
        </div>
    )
}

export default UseRef