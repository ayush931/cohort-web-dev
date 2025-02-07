import { useEffect, useState } from "react"

function TodoData() {

    const [todo, setTodo] = useState(1)
    const [todoData, setTodoData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect (function () {
        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/todos/" + todo)
        .then(async res => {
            const json = await res.json()
            setTodoData(json)
            setLoading(false)
        })
    }, [todo])

    return (
        <>
            <button onClick={() => setTodo(1)} style={{ color: todo == 1 ? "red" : "black"}}>Todo 1</button>
            <button onClick={() => setTodo(2)} style={{ color: todo == 2 ? "red" : "black"}}>Todo 2</button>
            <button onClick={() => setTodo(3)} style={{ color: todo == 3 ? "red" : "black"}}>Todo 3</button>
            <button onClick={() => setTodo(4)} style={{ color: todo == 4 ? "red" : "black"}}>Todo 4</button>
            <br />
            {loading ? "Loading..." : todoData.title}
        </>
    )
}

export default TodoData