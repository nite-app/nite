import React, { Component, useEffect, useState, useRef } from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
import temp from "../img/temp.png";
import seticon from "../img/setimg.png";
import searchicon from "../img/searchimg.png";
import signoutimg from "../img/signoutimg.png";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { useAuth } from "../contexts/AuthContext";
import Settings from "../components/Settings";
import { Alert, Fade, Grow, Snackbar } from "@mui/material";

function Page2() {
  const { name } = useAuth();
  const { mail } = useAuth();
  const { userColor } = useAuth();
  const { signout } = useAuth();
  const [switchState, setSwitchState] = useState(false);
  const [switchLabel, setSwitchLabel] = useState("No");

  const [error, setError] = useState("");
  const [errType, setErrType] = useState("success");
  const [errorExists, setErrorExists] = useState(false);
  // error, info, warning, success

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  const pfpTxt = "" + firstName.split("")[0] + lastName.split("")[0];

  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    if (switchState === false) {
      setSwitchLabel("No");
    } else if (switchState === true) {
      setSwitchLabel("Yes");
    }
  });

  function handleSwitchChange(event) {
    setSwitchState(event.target.checked);
  }

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
    <>
      <div className="App" id="Home">
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
        <Settings
          open={settingsOpen}
          onClose={() => setSettingsOpen(false)}
        ></Settings>
        <div className="sidebar">
          <Link to="/login" style={linkStyle}>
            <div className="account">
              <div
                id="accImg"
                style={{
                  backgroundColor: "#" + userColor,
                }}
              >
                <h3 className="accTxt">{pfpTxt}</h3>
              </div>
              <h1 className="accountheader">{name}</h1>
              <img src={signoutimg} alt="" id="signoutimg" onClick={signout} />
            </div>
          </Link>
          <div className="break">.</div>
          <div className="sidecontent">
            <div className="panel">
              <Link to="/" style={linkStyle}>
                <h1 className="panelheader">Home</h1>
                <p className="panelitem">Overview</p>
                <p className="panelitem">Daily Questions</p>
              </Link>
            </div>
            <div className="panel">
              <h1 className="panelheader">Your Sleep</h1>
              <p className="panelitem">Add Sleep Insights</p>
              <p className="panelitem">Weekly Report</p>
              <p className="panelitem">Your Notes</p>
            </div>
            <div className="panel">
              <Link to="/page3" style={linkStyle}>
                <h1 className="panelheader">Your Habits</h1>
                <p className="panelitem">View Habits</p>
                <p className="panelitem">Edit Habits</p>
                <p className="panelitem">Weekly Report</p>
              </Link>
            </div>
          </div>
          <div className="break">.</div>
          <div className="sidemenu">
            <div className="menuitem">
              <button
                className="menubtn"
                onClick={() => {
                  setSettingsOpen(true);
                }}
              >
                <img src={seticon} alt="" className="sidemenuicon" />
                <p className="sidemenup">Settings</p>
              </button>
            </div>
            <div className="menuitem">
              <img src={searchicon} alt="" className="sidemenuicon" />
              <p className="sidemenup">Find</p>
            </div>
          </div>
        </div>
        <div className="maincontainer">
          <h1 className="containerheader">Your Sleep</h1>
          <div className="mainpanelpg2">
            <h1 className="pg2mainheader">About Tonight</h1>
            <div className="mainpanel2grid">
              <div className="mainpanel2left">
                <textarea
                  name="dream"
                  id="dreamtxt"
                  cols=""
                  rows="5"
                  placeholder="Take a couple minutes to reflect on your sleep: write down
                    what you think is more important"
                  className="mainpanelleft2text"
                ></textarea>
              </div>
              <hr className="mainpanel2sep"></hr>
              <div className="mainpanel2center">
                <div className="pg2maintop">
                  <h1 className="pg2maintopheader">Do you remember a dream?</h1>
                  <div className="pg2maintopswitch">
                    <FormGroup>
                      <FormControlLabel
                        control={<Switch />}
                        label={switchLabel}
                        labelPlacement="end"
                        id="dreamSwitch"
                        onChange={handleSwitchChange}
                      />
                    </FormGroup>
                  </div>
                  <textarea
                    name="notes"
                    id="notestxt"
                    cols=""
                    rows="2"
                    placeholder="Take notes about your dreams, if you remember one, or
                    other general notes"
                    className="mainpanelcenter2text"
                  ></textarea>
                </div>
                <div className="pg2mainbottom">
                  <h1 className="pg2mainbottomheader">
                    How long have you slept?
                  </h1>
                  <div className="textfield">
                    <TextField
                      id="filled-basic"
                      label="Hours"
                      variant="standard"
                      type="number"
                      margin="none"
                      size="small"
                    />
                  </div>
                </div>
              </div>
              <hr className="mainpanel2sep"></hr>
              <div className="mainpanel2right">
                <div className="mainpanel2rightheader">How did you sleep?</div>
                <button
                  className="mainpanel2rightbutton"
                  onClick={() => {
                    setError("Data sent successfully");
                    setErrType("success");
                  }}
                >
                  <img
                    src={require("../img/greencircle.png")}
                    alt=""
                    className="mainpanel2rightimg"
                  />
                  <p className="mainpanel2rightbuttontext">
                    Pretty good, i feel great and energic
                  </p>
                </button>
                <button className="mainpanel2rightbutton">
                  <img
                    src={require("../img/yellowcircle.png")}
                    alt=""
                    className="mainpanel2rightimg"
                  />
                  <p className="mainpanel2rightbuttontext">
                    It could have been better, but still ok
                  </p>
                </button>
                <button className="mainpanel2rightbutton">
                  <img
                    src={require("../img/redcircle.png")}
                    alt=""
                    className="mainpanel2rightimg"
                  />
                  <p className="mainpanel2rightbuttontext">
                    Not really good, I feel tired
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="mainpanelscont">
            <div className="bottompanel">
              <div className="bottompanel2header">Sleep goal</div>
              <div className="goalscontainergrid">
                <div className="goalscontainergridtopleft">
                  <h1 className="goalscontainergridtopleftheader">
                    I have to wake up at...
                  </h1>
                  <div className="goalscontainerinput">
                    <input
                      type="number"
                      className="goalscontainergridtopleftinput"
                      min="00"
                      max="23"
                    />
                    <p className="goalscontainerinputp">:</p>
                    <input
                      type="number"
                      className="goalscontainergridtopleftinput"
                      min="00"
                      max="59"
                    />
                    <button className="goalscontainertopleftbutton"></button>
                  </div>
                </div>
                <hr className="goalscontainertopsep"></hr>
                <div className="goalscontainergridtopright">
                  <p className="goalscontainerp">
                    You should try to fall asleep at one of the following times:
                  </p>
                  <div className="goalscontainergridtoprighttext">
                    <p className="goalscontainerp">22:25 - 23:55 - 01:25</p>
                  </div>
                </div>
                <div className="goalscontainerbottom">
                  <p className="goalscontainerbottomtitle">
                    If you got to bed now, you should wake up at:
                  </p>
                  <div className="goalscontainerbottomtext">
                    <p className="goalscontainerp">3:15 - 4:45 - 6:15</p>
                    <p className="goalscontainerbottomfooter">
                      Please keep in mind that you should be falling asleep at
                      these times. The average human takes fourteen minutes to
                      fall asleep, so plan accordingly!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottompanel">
              <div className="bottompanel2header">Weekly report</div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Page2;

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  textAlign: "left",
};
