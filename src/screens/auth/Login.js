import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Alert, Fade, Grow, Snackbar } from "@mui/material";

function Login() {
  const emailref = useRef();
  const pswref = useRef();
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [errType, setErrType] = useState("success");
  const [errorExists, setErrorExists] = useState(false);
  // error, info, warning, success

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (emailref.current.value !== "" && pswref.current.value !== "") {
      try {
        login(emailref.current.value, pswref.current.value);
        setError("Logged in successfully");
        setErrType("success");
        navigate("/");
      } catch {
        setError("Internal Error: Failed to login");
        setErrType("failure");
      }
    } else {
      setError("Fill all fields!");
      setErrType("failure");
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
    if (error !== "" && error !== null) {
      console.log(error);
      setErrorExists(true);
      setTimeout(() => {
        setErrorExists(false);
        setError("");
      }, 3000);
    }
  }, [error]);

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
      <div className="alertBox">
        <Snackbar
          open={errorExists}
          autoHideDuration={3000}
          TransitionComponent={Fade}
          transitionDuration={{ enter: 500, exit: 500 }}
          TransitionProps={{ enter: true, exit: false }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          {error ? (
            <Alert
              severity={errType}
              sx={{
                width: "100%",
                "& .MuiAlert-message": {
                  fontSize: 20,
                  paddingHorizontal: 3,
                },
                "& .MuiAlert-icon": {
                  fontSize: 30,
                },
              }}
            >
              {error}
            </Alert>
          ) : (
            <></>
          )}
        </Snackbar>
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
