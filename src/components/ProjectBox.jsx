import React from "react";

function ProjectBox(props){
    return (
        <div className="project-item">
            <img src={props.imgURL} alt={props.content} className="img-box "/>
            <a href={props.url} className="pr-content">{props.content}</a>
        </div>
    )
}

export default ProjectBox;