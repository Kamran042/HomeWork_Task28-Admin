import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error__body">
      <main className="cover">
        <div className="container">
          <img
            className="error_img"
            src="https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png"
            width="200px"
            alt="Error 404"
          />
          <h1 className="error_h1">ERROR 404</h1>
          <h2 className="error_h2">This page does not exist.</h2>

          <Link target="_blank" className="btn" to="">
            go back to homepage
          </Link>
          <blockquote className="error_blockquote" cite="">
            “I'm sorry Dave, I'm afraid I can't do that.”
            <br />
            <p>HAL 9000 - 2001 Space Odyssey (1968)</p>
          </blockquote>
        </div>
      </main>
    </div>
  );
};

export default Error;
