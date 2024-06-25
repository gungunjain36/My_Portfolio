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
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url={"https://github.com/gungunjain36"} />
                <ProjectBox content={"Portfolio"} imgURL={image} url ={"#"} />
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url ={"#"} />
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url ={"#"} />
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url ={"#"} />
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url ={"#"} />
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url ={"#"} />
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url ={"#"} />
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url ={"#"} />
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url ={"#"} />
                <ProjectBox content={"MusicOn"} imgURL={MusicOnpic} url ={"#"} />
                </div>
            </div>
        </div>
    )
}

export default Projects;