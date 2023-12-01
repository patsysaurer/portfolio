import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const Navigation = () => {
    return(
        <>
        <div className="navigation">
            <nav>
                    <li className="active"><a href="#home">PS</a></li>
                    
                <ul className="topnav">
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                </ul>
                    <li className="btn btn-info"><a href="#contact">Contact</a></li>
            </nav>
        </div>
        </>
    )
}

export default Navigation