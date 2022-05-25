import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";

function Login() {
  const emailref = useRef();
  const pswref = useRef();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { setAlert } = useAlert();
  const { authError } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (emailref.current.value !== "" && pswref.current.value !== "") {
      try {
        login(emailref.current.value, pswref.current.value);
        navigate("/");
      } catch {
        setAlert("Internal Error: Failed to login", "error");
      }
    } else {
      setAlert("Fill all fields!", "error");
    }

    setLoading(false);
  };

  const [backlink, setBacklink] = useState("/briefing");
  useEffect(() => {
    if (currentUser) {
      setBacklink("/");
    } else {
      setBacklink("/briefing");
    }
  }, []);

  useEffect(() => {
    if (authError.shown === true) {
      setAlert(authError.message, authError.type);
    }
  }, [authError]);

  if (window.matchMedia("only screen and (max-width: 760px)").matches) {
    return (
      <>
        <div className="mobilediv">
          <img src={require("../../img/logo.png")} className="mobilelogo" />
          <h1 className="mobilettl">
            We are sorry, nite is currently available only on desktop devices
          </h1>
          <h2 className="mobilesub">Stay tuned for more news</h2>
        </div>
      </>
    );
  }
  return (
    <div className="acont">
      <div className="back">
        <div>
          <Link to={backlink}>
            <img
              src={require("../../img/chevron-left-solid.png")}
              alt=""
              width="25px"
            />
          </Link>
        </div>
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
