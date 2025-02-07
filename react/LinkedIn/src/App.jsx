import { useState } from "react"
import PostComponent from "./Post"

function App () {

    const [posts, setPosts] = useState([])
    
    const postComponents = posts.map(post => <PostComponent
        name={post.name}
        subtitle={post.subtitle}
        image={post.image}
        time={post.time}
        description={post.description}
    />)

    function addPost () {
        setPosts([...posts, {
            name: "Ayush",
            subtitle: "2200 followers",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s",
            time: "2min ago",
            description: "Having the interest for learning the react enginnering and the other subjects"
        }])
    }

    return (
        <div style={{ background: "#dfe6e9", height: "100vh" }}>
            <button onClick={addPost}>Add Post</button>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    {postComponents}
                </div>
            </div>
        </div>
    )
}

export default App