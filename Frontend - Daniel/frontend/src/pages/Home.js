import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/musicHome.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> CS 222 Project </h1>
        <p> GO REVIEW SOME MUSIC!</p>
        <Link to="/artist">
          <button> REVIEW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
