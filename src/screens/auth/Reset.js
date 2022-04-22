import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Reset() {
  const emailref = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const handleReset = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);
    resetPassword(emailref.current.value);
    try {
      //   resetPassword(emailref.current.value);
      alert(
        "Check your inbox at " +
          emailref.current.value +
          " for further informations"
      );
    } catch {
      setError("Internal Error: Failed to reset password");
      console.log(error);
    }

    setLoading(false);
  };

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
