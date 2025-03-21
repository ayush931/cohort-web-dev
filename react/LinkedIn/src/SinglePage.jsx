import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function SinglePage() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}> {/**Restrict the path that only has /neet */}
                        <Route path='/' element={<Landing />} />
                        <Route path='/neet/online-coaching-class-11' element={<Class11Program />}/>
                        <Route path='/neet/online-coaching-class-12' element={<Class12Program />}/>
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

function Layout () {
    return (
        <div style={{ height: "100vh", backgroundColor: "green" }}>
            <Header />
            <div style={{ height: "90vh", backgroundColor: "yellow" }}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

function Footer () {
    return (
        <div>
            Contact us | Footer
        </div>
    )
}

function Header () {
    return (
        <div>
            <Link to={"/"}>Allen</Link> |
            <Link to={"/neet/online-coaching-class-11"}>Class 11</Link> | 
            <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>
        </div>
    )
}

function ErrorPage () {
    return (
        <div>Sorry page not found</div>
    )
}

function Landing () {
    return (
        <div>
            Welcome to Allen
        </div>
    )
}

function Class11Program () {
    return (
        <div>
            NEET programs for Class 11th
        </div>
    )
}

function Class12Program () {

    const navigate = useNavigate()

    function redirectUser () {
        navigate("/")
    }

    return (
        <div>
            NEET programs for Class 12th
            <br />
            <button onClick={redirectUser}>Home Page</button>
        </div>
    )
}

export default SinglePage
