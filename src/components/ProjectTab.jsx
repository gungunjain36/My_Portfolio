import React from "react";
import { Link } from 'react-router-dom';
import Redirect from "../images/diamond-turn-right-solid.svg";
function ProjectTab(){
    return(
        <div className="project-tab box">
            Projects 
            <Link to="/projects">
                <img src={Redirect} alt="image" className="social-icon" />
            </Link>
        </div>
    )
}

export default ProjectTab;