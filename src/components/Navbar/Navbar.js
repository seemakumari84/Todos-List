import React from "react";
import "./Navbar.css";

function Navbar(){
    var name="<SK/>"
    return (
        <>
        <div className="nav_container">
            <div className="nav_left">
                {name}
            </div>
            <div className="nav_right">
                <p>About</p>
                <p>Tools</p>
                <p>Experience</p>
                <p>Projects</p>
                <p>Resume</p>
            </div>
        </div>
        <hr/>
        </>
    )
}
export default Navbar;