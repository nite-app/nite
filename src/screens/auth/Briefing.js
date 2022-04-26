import React from "react";
import { Link } from "react-router-dom";

function Briefing() {
  return (
    <div className="briefContainer">
      <div className="briefingText">
        <h1 className="briefingttl">CHANGE THE WAY YOU SLEEP</h1>
        <h1 className="briefingttl">
          TAKING NOTES ABOUT YOUR SLEEP AND HABITS
        </h1>
        <p className="briefingp">
          SOME FEATURES ARE STILL UNDER DEVELOPEMENT, WE APOLOGIZE FOR ANY BUG.
        </p>
      </div>
      <div className="briefingLinks">
        <Link to={"/register"}>
          <h1 className="briefingLink">SIGN UP</h1>
        </Link>
        <Link to={"/login"}>
          <h1 className="briefingLink">LOGIN</h1>
        </Link>
      </div>
    </div>
  );
}

export default Briefing;
