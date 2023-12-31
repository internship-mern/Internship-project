import React, { useContext, useState } from "react";
import "../styles/home.css";

import {
  FaDesktop,
  FaFileAlt,
  FaFileVideo,
  FaLaptopCode,
  FaFacebookMessenger,
  FaFolder,
} from "react-icons/fa";
import {
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaArrowRightLong,
} from "react-icons/fa6";
import { Link, Navigate } from "react-router-dom";
import { userContext } from "./userContect";

const Home = () => {
  const { loggedin } = useContext(userContext);

  if (loggedin === false) {
    return <Navigate to={"/"} />;
  }
  return (
    <div id="home-container">
      <div id="welcome-text-container">
        <h2 id="welcome-text">Welcome Student</h2>
        <h2 id="Quote">
          Quote - “Opportunities don't happen, you create them.”
        </h2>
      </div>
      <hr />
      <div id="cards-container">
        <div className="cards">
          <h2>
            {" "}
            <FaDesktop className="card-icons" /> Quiz / Online Assesments
          </h2>
          <div className="card-content-box">
            <h3>Upcomming:</h3>
            <ul>
              <li>Apptitude Text-1</li>
              <li>Apptitude Text-2</li>
              <li>Apptitude Text-3</li>
            </ul>
          </div>
          <Link to={"/quiz"}>
            <div className="card-button-div">
              {" "}
              <h3 className="card-button">Explore</h3>
              <FaArrowRightLong className="card-button-arrow" />{" "}
            </div>
          </Link>
        </div>

        <div className="cards">
          <h2>
            {" "}
            <FaFolder className="card-icons" />
            Files & Documents
          </h2>
          <div className="card-content-box">
            <h3>
              You can download Files and Documents of respective subjects.
            </h3>
            <h3>
              <FaFilePdf className="cards-icon-file" />
              <FaFileWord className="cards-icon-file" />
              <FaFilePowerpoint className="cards-icon-file" />
            </h3>
          </div>
          <Link to={"/files"}>
            <div className="card-button-div">
              {" "}
              <h3 className="card-button">Explore</h3>{" "}
              <FaArrowRightLong className="card-button-arrow" />
            </div>
          </Link>
        </div>

        <div className="cards">
          <h2>
            <FaFileVideo className="card-icons" />
            Lectures
          </h2>
          <div className="card-content-box">
            <h3>Coming Soon..</h3>
          </div>
          <Link>
            <div className="card-button-div">
              {" "}
              <h3 className="card-button">Explore</h3>
              <FaArrowRightLong className="card-button-arrow" />{" "}
            </div>
          </Link>
        </div>

        <div className="cards">
          <h2>
            <FaLaptopCode className="card-icons" /> Programming Languages <br />{" "}
            & Tutorials
          </h2>
          <div id="card-content-box">
            <ul>
              <li>Python Tutorial</li>
              <li>Java Tutorial</li>
              <li>C Tutorial</li>
            </ul>
          </div>
          <Link to={"/protut"}>
            <div className="card-button-div">
              {" "}
              <h3 className="card-button">Explore</h3>
              <FaArrowRightLong className="card-button-arrow" />{" "}
            </div>
          </Link>
        </div>

        <div className="cards">
          <h2>
            {" "}
            <FaFacebookMessenger className="card-icons" />
            Chats & Messages
          </h2>
          <div className="card-content-box">
            <h3>Explore now to chat with your Friends..</h3>
          </div>
          <Link to={"/chat"}>
            <div className="card-button-div">
              {" "}
              <h3 className="card-button">Explore</h3>{" "}
              <FaArrowRightLong className="card-button-arrow" />
            </div>
          </Link>
        </div>

        <div className="cards">
          <h2>
            {" "}
            <FaFileAlt className="card-icons" />
            OD / Leave Form{" "}
          </h2>
          <div className="card-content-box">
          <h3>Coming Soon..</h3>
          </div>
          <Link>
            <div className="card-button-div">
              {" "}
              <h3 className="card-button">Explore</h3>{" "}
              <FaArrowRightLong className="card-button-arrow" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
