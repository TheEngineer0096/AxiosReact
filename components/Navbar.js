import React from 'react'
import { Link , NavLink, withRouter} from 'react-router-dom'
const Navbar = (props) => {
    //setTimeout(()=> {
      //  props.history.push('/about')
    //},2000)
    return (
        <nav className="nav-wrapper red darken-3">
    <div className="container">
        <a className="brand-logo">React Bar</a>
        <ul className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
        </nav>
    )
}


export default Navbar