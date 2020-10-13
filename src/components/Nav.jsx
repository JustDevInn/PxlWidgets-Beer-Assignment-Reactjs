import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Nav.css';

export default function Navbar() {
    return (
    <div className="navBar">
        <div className="nav-links">
            <Link to={"/"} className="navLink">Home</Link>
            <Link to={"/brewery"} className="navLink">Breweries</Link>
            <Link to={"/beers"} className="navLink">Beers</Link>
        </div>
    </div>
    )
}