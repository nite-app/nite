import React, { useRef, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useAuth } from "../contexts/AuthContext";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import logo from "../img/logo.png";
import { width } from "@mui/system";
import { Link } from "react-router-dom";
import { Alert, Fade, Grow, Snackbar } from "@mui/material";

function Settings({ open, children, onClose }) {
  const { currentUser } = useAuth();
  const { name } = useAuth();
  const { mail } = useAuth();
  const { userColor } = useAuth();
  const { deleteAccount } = useAuth();
  const { updateEmail } = useAuth();

  const [nameState, setNameState] = useState(name);
  const settingsNameRef = useRef();

  const [emailState, setEmailState] = useState(mail);
  const settingsEmailRef = useRef();

  const [value, setValue] = useState("1");

  const db = getFirestore();

  const [error, setError] = useState("");
  const [errType, setErrType] = useState("success");
  const [errorExists, setErrorExists] = useState(false);
  // error, info, warning, success

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  const pfpTxt = "" + firstName.split("")[0] + lastName.split("")[0];

  function handleNameChange() {
    if (nameState !== "") {
      if (currentUser !== null) {
        updateDoc(doc(db, "users", currentUser.uid), {
          firstName: nameState.split(" ")[0],
          lastName: nameState.split(" ")[1],
        }).then(() => {
          setError("Name changed successfully!");
          setErrType("success");
        });
      }
    }
  }

  function handleEmailChange() {
    if (emailState !== "") {
      if (currentUser !== null) {
        updateEmail(emailState);
        updateDoc(doc(db, "users", currentUser.uid), {
          email: emailState,
        }).then(() => {
          setError("Name changed successfully!");
          setErrType("success");
        });
      }
    }
  }

  useEffect(() => {
    if (currentUser !== null) {
      const docRef = doc(db, "users", currentUser.uid);

      getDoc(docRef).then((doc) => {
        setNameState(doc.data().firstName + " " + doc.data().lastName);
        setEmailState(doc.data().email);
      });
    }
  }, [currentUser]);

  if (!open) return null;
  return (
    <>
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
      <div className="settingsOverlay" onClick={onClose}></div>
      <div className="settingsModal">
        {children}
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            "& .MuiBox-root": {
              height: 610,
            },
          }}
        >
          <TabContext value={value}>
            <div className="settingsContainer">
              <div className="settingsSidebar">
                <div className="settingsAccount">
                  <div
                    id="setImg"
                    style={{
                      backgroundColor: "#" + userColor,
                    }}
                  >
                    <h3 className="setAccTxt">{pfpTxt}</h3>
                  </div>
                  <div className="settingsAccountText">
                    <h1 className="settingsAccountHeader">{name}</h1>
                    <h1 className="settingsUserEmail">{mail}</h1>
                  </div>
                </div>
                <h1 className="settingsTxt">PREFERENCES</h1>
                <div className="tablistContainer">
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                    }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      orientation="vertical"
                      sx={{
                        "& .MuiButtonBase-root": {
                          backgroundColor: "#17223b",
                          marginTop: 1,
                          borderRadius: 2,
                          color: "#FFF",
                        },
                        "& .MuiButtonBase-root:hover": {
                          backgroundColor: "#222e4b",
                          marginTop: 1,
                          borderRadius: 2,
                          color: "#FFF",
                        },
                        "& .Mui-selected": {
                          color: "#FFF",
                          backgroundColor: "#0e1629",
                          fontWeight: 500,
                        },
                        "& .MuiTabs-indicator": {
                          backgroundColor: "#AFAFAF",
                          display: "none",
                        },
                      }}
                    >
                      <Tab label="Account" value="1" />
                      <Tab label="About" value="2" />
                    </TabList>
                  </Box>
                </div>
              </div>
              <div className="settingsSep"></div>
              <div className="settingsContent">
                <button
                  className="settingsCloseBtn"
                  onClick={() => {
                    onClose();
                  }}
                >
                  &#x2613;
                </button>
                <TabPanel value="1" className="tabPanel" sx={{}}>
                  <h1 className="settingsTabTitle">My Account</h1>
                  <div className="setAccCtx">
                    <h3 className="settingsTabLabel">Name</h3>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="settingsfield"
                      ref={settingsNameRef}
                      required
                      value={nameState}
                      onChange={(e) => {
                        setNameState(settingsNameRef.current.value);
                      }}
                    />
                    <button
                      className="settingsButton"
                      onClick={() => {
                        handleNameChange();
                      }}
                    >
                      Change Name
                    </button>
                    <h3 className="settingsTabLabel">Email</h3>
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      className="settingsfield"
                      ref={settingsEmailRef}
                      required
                      value={emailState}
                      onChange={(e) => {
                        setEmailState(settingsEmailRef.current.value);
                      }}
                    />
                    <p className="settingsalert">
                      <span style={{ color: "yellow" }}>Alert: </span>
                      This feature requires recent authentication, re-login in
                      this session to edit your profile.
                    </p>
                    <button
                      className="settingsButton"
                      onClick={() => {
                        handleEmailChange();
                      }}
                    >
                      Change Email
                    </button>
                    <h3 className="settingsTabLabel">Account Deletion</h3>
                    <p className="settingswarning">
                      <span style={{ color: "red" }}>Warning: </span>
                      Deleting your account will permanently delete all your
                      data, this action can't be undone
                    </p>
                    <button
                      className="settingsButton"
                      onClick={() => {
                        deleteAccount();
                        console.log("Account deleted");
                      }}
                    >
                      <span style={{ color: "red" }}>Delete Account</span>
                    </button>
                  </div>
                </TabPanel>
                <TabPanel
                  value="2"
                  className="tabPanel"
                  sx={{
                    "&.MuiTabPanel-root": {
                      position: "absolute",
                      top: 0,
                      zIndex: 0,
                    },
                    // "& .MuiTabPanel-root": { width: "80%" },
                  }}
                >
                  <h1 className="settingsTabTitle">About</h1>
                  <div className="abtlogocont">
                    <img src={logo} alt="" className="settingslogo" />
                    <h3 className="abtlogotxt">nite</h3>
                  </div>
                  <p className="abtversion">Alpha Version</p>
                  <h3 className="settingsTabLabel">Socials</h3>
                  <a
                    href="https://niteapp.cf"
                    className="abtlink"
                    style={{ marginTop: "10px" }}
                  >
                    Presentation Website
                  </a>
                  <a href="https://niteapp.cf" className="abtlink">
                    Twitter
                  </a>
                </TabPanel>
              </div>
            </div>
          </TabContext>
        </Box>
      </div>
    </>
  );
}

export default Settings;
