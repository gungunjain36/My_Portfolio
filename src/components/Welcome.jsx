import React from "react";
import SocialLinks from "./SocialLinks";
function Welcome() {
  return (
    <div className="welcome box">
      <span>
        Hey! I am <b>Gungun Jain,</b> I am a tech enthusiast and have a
        great interest in Coding and developing Web Apps.<br />I love developing new stuff from Scratch
        and trying to address the real world issues via software.
      </span>
      <div className="img-self"> 
          <img src={require("../images/img 24.jpg")} alt="image" className="rounded-image" />
      </div>
     <SocialLinks />
      
    </div>
  );
}

export default Welcome;
