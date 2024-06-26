import React from "react";
import Navbar from "./Navbar";
import ProjectBox from "./ProjectBox";
import MusicOnpic from '../images/MusicOnpic.png';
import image from "../images/image.png";

function Projects(){
    return(
        <div className="main">
            <Navbar />
            <div className="project-main">
                <div className="project-in">
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url={"https://spotify-omega-weld.vercel.app/"} />
                <ProjectBox content={"Portfolio"} imgURL={image} url ={"https://my-portfolio-gungun-jains-projects.vercel.app/"} />
                </div>
            </div>
        </div>
    )
}

export default Projects;