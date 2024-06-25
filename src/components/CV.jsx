import React from "react";

function CV(){
    return(
        <div className="CV box">
            <div>
            <a href="https://drive.google.com/file/d/1uNw5jVjd9GEweN16whU2QVcIW99_XNGA/view?usp=sharing"><img src={require("../images/cv.png")} alt="image" className="cv-image"/></a>
            </div>
            <div className="cv-link"><a href="https://drive.google.com/file/d/1uNw5jVjd9GEweN16whU2QVcIW99_XNGA/view?usp=sharing">Download CV</a></div>
        </div>
    )
}

export default CV;