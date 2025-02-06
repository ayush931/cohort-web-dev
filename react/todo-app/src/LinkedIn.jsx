import { useState } from "react"

function LinkedIn () {
    return (
        <div style={{ background: "#dfe6e9", height: "100vh" }}>
            <ToggleMessage />
            <Greeting name={"Ayush"} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <br />
                    <PostComponent 
                        name={"Ayush"}
                        subtitle={"22345 followers"}
                        time={"12m"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s"}
                        description={"Having the interest for learning the react enginnering and the other subjects"}
                    />
                    <br />
                    <PostComponent 
                        name={"Ayush"}
                        subtitle={"promoted"}
                        // time={"12m"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s"}
                        description={"Having the interest for learning the react enginnering and the other subjects"}
                    />
                    <br />
                    <PostComponent 
                        name={"Ayush"}
                        subtitle={"22345 followers"}
                        time={"12m"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s"}
                        description={"Having the interest for learning the react enginnering and the other subjects"}
                    />
                    <br />
                    <PostComponent 
                        name={"Ayush"}
                        subtitle={"promoted"}
                        // time={"12m"}
                        image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s"}
                        description={"Having the interest for learning the react enginnering and the other subjects"}
                    />
                    <br />
                </div>
            </div>
        </div>
    )
}

const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

const ToggleMessage = () => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div>
            <button onClick={() => setIsVisible(!isVisible)}>
                Toogle Message
            </button>
            {isVisible && <p>This message is conditionally rendered!!!</p>}
        </div>
    )
}

function PostComponent ({ name, subtitle, time, image, description}) {
    return (
        <div style={style}>
            <div style={{ display: "flex" }}>
                <img src={image} alt="Photo" style={{
                    height: 30,
                    width: 30,
                    borderRadius: 20
                }}/>
                <div style={{ fontSize: 10, marginLeft: 10 }}>
                    <b>{name}</b>
                    <div>{subtitle}</div>
                    {(time !== undefined) ? <div style={{ display: "flex" }}>
                        <div>{time}</div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumAUA_y40VSfcuQPdvX4XUb274c7I4qBRZA&s" alt="clock" style={{ height: 12, width: 12 }}/>
                    </div> : null}
                </div>
            </div>
            <div style={{ fontSize: 12 }}>{description}</div>
        </div>
    )
}

const Greeting = ({ name }) => {
    return <h1>Hello! {name}</h1>
}

export default LinkedIn