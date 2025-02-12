import { useState } from "react"
import { useFetch } from "./hooks/useFetch.js"
import { usePostTitle } from "./hooks/usePostTitle.js"

// Custom Hook
function useCounter () {
    const [count, setCount] = useState(0)

    function increaseCount () {
        setCount(count => count + 1)
    }

    return {
        count: count,
        increaseCount: increaseCount
    }
}

function Counter () {
    const { count, increaseCount } = useCounter()

    return (
        <div>
            <button onClick={increaseCount}>Increase {count}</button>
        </div>
    )
}

function CustomHook () {

    const postTitle = usePostTitle()
    const [currentPost, setCurrentPost] = useState(1)

    const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost, 10)

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <Counter />
            <Counter />
            <Counter />
            <Counter />

            {postTitle}
            <br />
            <button onClick={() => setCurrentPost(1)}>Post 1</button>
            <button onClick={() => setCurrentPost(2)}>Post 2</button>
            <button onClick={() => setCurrentPost(3)}>Post 3</button>
            <br />
            {}
            {JSON.stringify(finalData)}
        </div>
    )
}

export default CustomHook