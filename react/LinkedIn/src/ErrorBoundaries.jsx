import React from "react"

function ErrorBoundaries () {
    return (
        <>
            <ErrorBoundary>
                <Card1 />
            </ErrorBoundary>
                <Card2 />
            
        </>
    )
}

function Card1 () {
    throw new Error ("Error caught")
    return (
        <div style={{ background: "red", borderRadius: 10, padding: 20 }}>
            Hii there
        </div>
    )
}

function Card2 () {
    return (
        <div style={{ background: "red", borderRadius: 10, padding: 20, margin: 10 }}>
            Hello 
        </div>
    )
}

class ErrorBoundary extends React.Component {
    constructor (props) {
        super (props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (error) {
        return { hasError: true }
    }

    componentDidCatch (error, info) {
        console.log("Error caught: ", error, info)
    }

    render () {
        if (this.state.hasError) {
            return (
                <div style={{ background: "red", borderRadius: 10, padding: 20 }}>
                    Something went wrong !!!
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundaries