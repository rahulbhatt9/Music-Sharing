import React from "react";
import TheProposal from "../assets/AboutTheProject.PNG";
import "../styles/About.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${TheProposal})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT THE PROJECT</h1>
        <p>
        Pitch:
        Music is something that everyone is passionate about. Our website aims to allow people to
        share their music opinions about what they care about with who they care about.
        </p>
      </div>
    </div>
  );
}

export default About;
