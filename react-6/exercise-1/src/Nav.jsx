import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <ul>
            <Link to="/" >Main</Link> <br/>
            <Link to="/login">Login</Link><br/>
            <Link to="/signup">Signup</Link><br/>
            <Link to="/error">Error</Link>
        </ul>
    )
}

export default Navbar