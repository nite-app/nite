import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Alert from "../Alert";

function Login() {
  const emailref = useRef();
  const pswref = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // try {
    //   setError("");
    //   setLoading(true);
    //   setUser(true);
    //   login(emailref.current.value, pswref.current.value);
    // } catch {
    //   setError("Internal Error: Failed to login");
    //   console.log(error);
    // }

    setError("");
    setLoading(true);
    login(emailref.current.value, pswref.current.value);
    navigate("/");

    setLoading(false);
  };
  return (
    <div className="acont">
      <div className="back">
        <Link to="/home">
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
            <Link to="/register" className="BlueLink">
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
            ref={emailref}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="psw"
            id="logpsw"
            className="field"
            ref={pswref}
            required
          />
          <hr />

          <button
            type="submit"
            className="loginbtn"
            onClick={handleLogin}
            disabled={loading}
          >
            Login
          </button>
        </div>
        <div className="asc2"></div>
      </div>
    </div>
  );
}

export default Login;
