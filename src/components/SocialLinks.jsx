import React from "react";
import githubIcon from "../images/github.svg";
import envelopeIcon from "../images/envelope-solid.svg";
import linkedinIcon from "../images/linkedin.svg"; // Replace with the correct path to your icon

const SocialLinks = () => (
  <div className="social-links">
    <a href="mailto:gungunjainxia@gmail.com">
      <img src={envelopeIcon} alt="email" className="social-icon" />
    </a>
    <a href="https://github.com/gungunjain36">
      <img src={githubIcon} alt="github" className="social-icon" />
    </a>
    <a href="https://www.linkedin.com/in/gungun-jain-3bb256267">
      <img src={linkedinIcon} alt="linkedin" className="social-icon" />
    </a>
  </div>
);

export default SocialLinks;
