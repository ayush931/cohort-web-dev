const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)"
        }}>
            {children}
        </div>
    )
}

function ChildrenComponent () {
    return (
        <div>
            <Card>
                <h2>Card Title</h2>
                <p>This is some context inside the card</p>
            </Card>
            <Card>
                <h2>Another card!</h2>
                <p>This card has some different content</p>
            </Card>
        </div>
    )
}

export default ChildrenComponent