import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
import temp from "../img/temp.png";
import seticon from "../img/setimg.png";
import searchicon from "../img/searchimg.png";
import signoutimg from "../img/signoutimg.png";
import { useAuth } from "../contexts/AuthContext";
import Input from "@mui/material/Input";
import Habit from "../components/Habit";
import HabitReport from "../components/HabitReport";
import { v4 as uuidv4 } from "uuid";
import InsightsCircles from "../components/InsightsCircles";
import Settings from "../components/Settings";
import { Alert, Fade, Grow, Snackbar } from "@mui/material";

const Page3 = () => {
  const { name } = useAuth();
  const { mail } = useAuth();
  const { userColor } = useAuth();
  const { signout } = useAuth();

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  const pfpTxt = "" + firstName.split("")[0] + lastName.split("")[0];

  const [settingsOpen, setSettingsOpen] = useState(false);

  const [error, setError] = useState("");
  const [errType, setErrType] = useState("success");
  const [errorExists, setErrorExists] = useState(false);
  // error, info, warning, success

  //HABITS
  const [habitText, setHabitText] = useState("");
  const [habitListLeft, setHabitListLeft] = useState([]);
  const [habitListRight, setHabitListRight] = useState([]);
  const [count, setCount] = useState(0);

  //demo data
  const habitData = {
    name: "Eat Healthy",
    done: [true, true, true, true, false, true, true],
    days: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
  };

  useEffect(() => {
    setCount(habitListLeft.length + habitListRight.length);
  }, []);

  const handleAddHabit = () => {
    if (habitText !== "") {
      if (count < 4) {
        setHabitListLeft([...habitListLeft, habitText]);
        setHabitText("");
      } else if (count > 3 && count < 8) {
        setHabitListRight([...habitListRight, habitText]);
        setHabitText("");
      } else {
        setError("You can only insert a maximum of 8 Habits!");
        setErrType("error");
      }

      setCount(count + 1);
    } else {
      setError("Write some text!");
      setErrType("error");
    }
  };

  const habitTextChange = (event) => {
    setHabitText(event.target.value);
  };

  const habitIconChange = (event) => {
    setHabitText(event.target.value);
  };

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
        <Settings open={settingsOpen} onClose={() => setSettingsOpen(false)}>
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
            </div>
            <div className="settingsSep"></div>
            <div className="settingsContent">
              <button
                className="settingsCloseBtn"
                onClick={() => {
                  setSettingsOpen(false);
                }}
              >
                &#x2613;
              </button>
            </div>
          </div>
        </Settings>
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
              <Link to="/page2" style={linkStyle}>
                <h1 className="panelheader">Your Sleep</h1>
                <p className="panelitem">Add Sleep Insights</p>
                <p className="panelitem">Weekly Report</p>
                <p className="panelitem">Your Notes</p>
              </Link>
            </div>
            <div className="panel">
              <h1 className="panelheader">Your Habits</h1>
              <p className="panelitem">View Habits</p>
              <p className="panelitem">Edit Habits</p>
              <p className="panelitem">Weekly Report</p>
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
          <h1 className="containerheader">Your Habits</h1>
          <div className="mainpanel1">
            <div className="mainpanel3grid">
              <div className="mainpanel3gridleft">
                <div className="mainpanel3gridleftgridheader">
                  Current habits
                </div>
                <div className="mainpanel3gridleftgrid">
                  <div className="mainpanel3gridleftgridleft">
                    {habitListLeft.map((habit) => {
                      return <Habit icon={"alcoolicon.png"} text={habit} />;
                    })}
                  </div>
                  <hr className="mainpanel3gridleftsep"></hr>
                  <div className="mainpanel3gridleftgridright">
                    {habitListRight.map((habit) => {
                      return <Habit icon={"alcoolicon.png"} text={habit} />;
                    })}
                  </div>
                </div>
              </div>

              <hr className="mainpanel3sep"></hr>

              <div className="mainpanel3gridright">
                <h1 className="mainpanel3gridrighttitle">Set a new habit</h1>
                <div className="mainpanel3gridrightcontainer">
                  <div className="mainpanel3gridrighttxt">
                    <p className="mainpanel3gridrightintext1">Name</p>
                    <input
                      type="text"
                      className="mainpanel3gridrightinput"
                      value={habitText}
                      onChange={habitTextChange}
                      required
                    />
                  </div>
                  <div className="colorsselect">
                    <p className="mainpanel3gridrightintext1">Color</p>
                    <div className="colorsgrid">
                      <div className="colorcircle red"></div>
                      <div className="colorcircle orange"></div>
                      <div className="colorcircle yellow"></div>
                      <div className="colorcircle green"></div>
                      <div className="colorcircle aqua"></div>
                      <div className="colorcircle blue"></div>
                      <div className="colorcircle purple"></div>
                      <div className="colorcircle pink"></div>
                      <div className="colorcircle white"></div>
                    </div>
                  </div>
                  <div className="mainpanel3gridrightadd">
                    <div className="iconselect">
                      <p className="mainpanel3gridrightintext">Icon</p>
                      <div className="iconcircle">
                        <label htmlFor="iconSelect" className="selectIconBtn">
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </label>
                        <Input
                          id="iconSelect"
                          type="file"
                          className="iconcircle"
                          text=""
                          style={{ visibility: "hidden" }}
                          inputProps={{
                            accept: "image/png, image/gif, image/jpeg",
                          }}
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                    <div className="reminderselect">
                      <p className="mainpanel3gridrightintext">Add</p>
                      <button className="reminderbtn" onClick={handleAddHabit}>
                        Add Habit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainpanelscont">
            <div className="bottompanel">
              <h1 className="bottomh">Weekly report</h1>
              <div className="habitscontainer">
                <div className="left">
                  <HabitReport
                    icon={"appleicon.png"}
                    text={"Eat healthy"}
                    number={0}
                  />
                  <HabitReport
                    icon={"readicon.png"}
                    text={"Read a book"}
                    number={0}
                  />
                  <HabitReport
                    icon={"alcoolicon.png"}
                    text={"Don't drink alcool"}
                    number={0}
                  />
                  <HabitReport
                    icon={"gamesicon.png"}
                    text={"No games"}
                    number={0}
                  />
                </div>
                {/* SEP */}
                <hr className="sep"></hr>
                {/* SEP */}
                <div className="right">
                  <HabitReport
                    icon={"handballicon.png"}
                    text={"Play handball"}
                    number={0}
                  />
                  <HabitReport
                    icon={"meditate.png"}
                    text={"Meditate"}
                    number={0}
                  />
                  <HabitReport
                    icon={"workouticon.png"}
                    text={"Train yourself"}
                    number={0}
                  />
                  <HabitReport
                    icon={"runicon.png"}
                    text={"Run 5 km"}
                    number={0}
                  />
                </div>
              </div>
            </div>
            <div className="bottompanel">
              <h1 className="bottomh">Habit Insights</h1>
              <div className="insightscontainer">
                <div className="insightstopleft">
                  <InsightsCircles habit={habitData} />
                </div>
                <div className="insightstopright"></div>
                <div className="insightsbottomleft"></div>
                <div className="insightsbottomright"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Page3;

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  textAlign: "left",
};
