import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Alert from "../../components/Alert";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  setDoc,
} from "firebase/firestore";

export default function Register() {
  const navigate = useNavigate();
  //Params Refs
  const emailref = useRef();
  const pswref = useRef();
  const repeatref = useRef();
  const fnameref = useRef();
  const lnameref = useRef();
  //System states
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //Ctx exports
  const { signup } = useAuth();
  const { currentUser } = useAuth();

  const [emailState, setEmailState] = useState("");
  const [firstState, setFirstState] = useState("");
  const [lastState, setLastState] = useState("");

  const pfpColors = [
    "FFADAD",
    "FFD6A5",
    "FDFFB6",
    "CAFFBF",
    "98F6FF",
    "A0C4FF",
    "BDB2FF",
    "FFC6FF",
  ];

  const db = getFirestore();

  async function handleSubmit(e) {
    e.preventDefault();

    const password = pswref.current.value;
    const pwrepeat = repeatref.current.value;
    const email = emailref.current.value;
    const fname = fnameref.current.value;
    const lname = lnameref.current.value;
    setEmailState(email);
    setFirstState(fname);
    setLastState(lname);

    if (
      email !== "" &&
      fname !== "" &&
      lname !== "" &&
      password !== "" &&
      pwrepeat !== ""
    ) {
      if (password !== pwrepeat) {
        return alert("Password do not match");
      }

      try {
        setError("");
        setLoading(true);
        signup(email, password);
      } catch {
        setError("Internal Error: Failed to create your account");
      }
    } else {
      alert("Please fill all fields!");
    }
    setLoading(false);
  }

  useEffect(() => {
    if (currentUser !== null) {
      const docRef = doc(db, "users", currentUser.uid);
      const docSnap = getDoc(docRef);

      getDoc(doc(db, "users", currentUser.uid)).then((docSnap) => {
        if (docSnap.exists()) {
          console.log("Document already exists!");
        } else {
          setDoc(doc(db, "users", currentUser.uid), {
            email: emailState,
            firstName: firstState,
            lastName: lastState,
            pfpColor: pfpColors[Math.floor(Math.random() * pfpColors.length)],
          });
        }
      });
    }
  }, [currentUser]);

  return (
    <>
      <div className="fullpage">
        {error && alert(error)}
        <div className="formcontainer">
          <div className="acont">
            <div className="back">
              {/* Change to go to onboarding */}
              <Link to="/">
                <img
                  src={require("../../img/chevron-left-solid.png")}
                  width="25px"
                  alt=""
                />
              </Link>
            </div>
            <div className="ctsplit">
              <div className="formcontainer">
                <h1 className="formttl">Create your account.</h1>
                <div className="changescreen">
                  <p className="formsub">Already a member?&nbsp;</p>
                  <Link to="/login" className="BlueLink">
                    Login
                  </Link>
                </div>
                <hr />

                <div className="registerNameContainer">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    id="regfname"
                    className="field"
                    ref={fnameref}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    id="reglname"
                    className="field"
                    ref={lnameref}
                    required
                  />
                </div>

                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  id="regemail"
                  className="field"
                  ref={emailref}
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  name="psw"
                  id="regpsw"
                  className="field"
                  ref={pswref}
                  required
                />

                <input
                  type="password"
                  placeholder="Repeat Password"
                  name="psw-repeat"
                  id="psw-repeat"
                  className="field"
                  ref={repeatref}
                  required
                />
                <hr />
                <button
                  type="submit"
                  className="registerbtn"
                  onClick={handleSubmit}
                  disabled={loading} //works only if loading is false
                >
                  Register
                </button>
              </div>
              <div className="asc2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
