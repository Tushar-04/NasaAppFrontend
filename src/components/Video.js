import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyles.css";

import spaceVideo from "../assets/space.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Explore Space</h1>
        <p>Different paths one destination "Space"</p>
        <div>
          <Link to="/pricing" className="btn">
            Training
          </Link>
          {/* <Link to="/contact" className="btn btn-light">
            Launch
          </Link> */}

        </div>
      </div>
      <iframe className="chat" width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/a8bcda60-e993-414e-9010-04ec01e8260f"></iframe>
    </div>
  );
};

export default Video;
