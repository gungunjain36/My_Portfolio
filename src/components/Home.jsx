import React from "react";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import About from "./About";
import CV from "./CV";
import ProjectTab from "./ProjectTab";
import Now from "./Now";
import Time from "./Time";
import Education from "./Education";
function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-div">
        <div>
        <Welcome />
        </div>
        <div className="second-row">
        <About />
        <CV />
        <ProjectTab />
        <Now />
        <Time />
        <Education />
        </div>
      </div>
    </div>
  );
}

export default Home;
