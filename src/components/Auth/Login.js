import React from "react";
import { Link, Outlet } from "react-router-dom";

function Login() {
  return (
    <div className="acont">
      <div className="back">
        <Link to="home">
          <img
            src={require("../../img/chevron-left-solid.png")}
            alt=""
            width="25px"
          />
        </Link>
      </div>
      <div className="ctsplit">
        <div className="formcontainer">
          <h1 className="formttl">Log into your account.</h1>
          <div className="changescreen">
            <p className="formsub">First time here?&nbsp;</p>
            <Link to="register" className="BlueLink">
              Register
            </Link>
          </div>

          <hr />
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="logemail"
            className="field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="psw"
            id="logpsw"
            className="field"
            required
          />
          <hr />

          <button type="submit" className="loginbtn">
            Login
          </button>
        </div>
        <div className="asc2"></div>
      </div>
    </div>
  );
}

export default Login;
