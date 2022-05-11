import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import useAlert from "../../hooks/useAlert";

function Reset() {
  const emailref = useRef();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { resetPassword } = useAuth();
  const { currentUser } = useAuth();
  const { setAlert } = useAlert();

  const handleReset = async (e) => {
    e.preventDefault();

    if (emailref.current.value !== "") {
      setLoading(true);
      try {
        resetPassword(emailref.current.value);
        setAlert(
          "Check your inbox at " +
            emailref.current.value +
            " for further informations",
          "success"
        );
      } catch {
        setAlert("Internal Error: Failed to reset password", "error");
      }

      setLoading(false);
    } else {
      setAlert("Please fill all fields!", "error");
    }
  };

  const [backlink, setBacklink] = useState("/briefing");
  useEffect(() => {
    if (currentUser) {
      setBacklink("/");
    } else {
      setBacklink("/briefing");
    }
  }, []);

  return (
    <div className="acont">
      <div className="back">
        <Link to={backlink}>
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
