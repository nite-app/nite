import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Snackbar from "../../components/Snackbar";

function Reset() {
  const emailref = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const [error, setError] = useState("");
  const [errType, setErrType] = useState("success");
  const snackbarRef = useRef(null);

  const handleReset = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    resetPassword(emailref.current.value);
    try {
      //   resetPassword(emailref.current.value);
      setError(
        "Check your inbox at " +
          emailref.current.value +
          " for further informations"
      );
      setErrType("success");
    } catch {
      setError("Internal Error: Failed to reset password");
      setErrType("failure");
    }

    setLoading(false);
  };

  useEffect(() => {
    if (error !== "" && error !== null) {
      console.log(error);
      snackbarRef.current.show();
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [error]);

  return (
    <div className="acont">
      <div className="back">
        {/* Change to go to onboarding */}
        <Link to="/register">
          <img
            src={require("../../img/chevron-left-solid.png")}
            alt=""
            width="25px"
          />
        </Link>
      </div>
      <div className="ctsplit">
        <div className="formcontainer">
          <h1 className="formttl">Reset your password.</h1>
          <div className="changescreen">
            <p className="formsub">Did you just remember it?&nbsp;</p>
            <Link to="/login" className="BlueLink">
              Login
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
          <hr />

          <button
            type="submit"
            className="loginbtn"
            onClick={handleReset}
            disabled={loading}
          >
            Reset Password
          </button>
        </div>
        <div className="asc2"></div>
      </div>
    </div>
  );
}

export default Reset;
