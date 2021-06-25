import React from 'react';
import {NavLink} from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <>
        <nav>
            <NavLink className="ind" exact to="/">India</NavLink>
          
            <NavLink className="sta" exact to="/State" >States</NavLink> 
        </nav>
            
        </>
    )
}

export default Navbar;
