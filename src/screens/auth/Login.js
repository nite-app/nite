import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const emailref = useRef();
  const pswref = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    try {
      login(emailref.current.value, pswref.current.value);
      navigate("/");
    } catch {
      setError("Internal Error: Failed to login");
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="acont">
      <div className="back">
        {/* Change to go to onboarding */}
        <Link to="/">
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
          <Link
            to={"/reset"}
            className="BlueLink"
            style={{ marginTop: "20px" }}
          >
            Forgot Password?
          </Link>
        </div>
        <div className="asc2"></div>
      </div>
    </div>
  );
}

export default Login;
