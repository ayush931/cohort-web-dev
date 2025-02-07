const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }

function Post ({ name, subtitle, time, image, description}) {
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

export default Post