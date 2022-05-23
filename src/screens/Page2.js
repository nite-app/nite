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
import useAlert from "../hooks/useAlert";
import BarChart from "../components/Charts/BarChart";
import { HomeData } from "../Charts Data/HomeData";

function Page2() {
  const { name } = useAuth();
  const { mail } = useAuth();
  const { userColor } = useAuth();
  const { signout } = useAuth();
  const [switchState, setSwitchState] = useState(false);
  const [switchLabel, setSwitchLabel] = useState("No");

  const { setAlert } = useAlert();

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  const pfpTxt = "" + firstName.split("")[0] + lastName.split("")[0];

  const [settingsOpen, setSettingsOpen] = useState(false);

  // sleep advice
  const inminutesRef = useRef();
  const inhoursRef = useRef();

  const [inhours, setInhours] = useState("");
  const [inminutes, setInminutes] = useState("");

  const [time11, setTime11] = useState("22.25");
  const [time12, setTime12] = useState("23.55");
  const [time13, setTime13] = useState("01.25");

  const [time21, setTime21] = useState("3.15");
  const [time22, setTime22] = useState("4.45");
  const [time23, setTime23] = useState("6.15");

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

  //Calcolo cicli di sonno iversi
  function generateSleep1() {
    if (inhours !== "" && inminutes !== "") {
      if (inhours < 24 && inminutes < 60) {
        let date1 = new Date();
        date1.setHours(parseInt(inhours));
        date1.setMinutes(parseInt(inminutes));
        let date2 = new Date();
        date2.setHours(parseInt(inhours));
        date2.setMinutes(parseInt(inminutes));
        let date3 = new Date();
        date3.setHours(parseInt(inhours));
        date3.setMinutes(parseInt(inminutes));

        date1.setHours(date1.getHours() - 9);
        setTime11(date1.getHours() + ":" + date1.getMinutes());

        date2.setHours(date2.getHours() - 7);
        date2.setMinutes(date2.getMinutes() - 30);
        setTime12(date2.getHours() + ":" + date2.getMinutes());

        date3.setHours(date3.getHours() - 6);
        setTime13(date3.getHours() + ":" + date3.getMinutes());
      } else {
        setAlert("Please insert a valid input!", "error");
        setInhours("");
        setInminutes("");
      }
    } else {
      setAlert("Please fill the fields!", "error");
    }
  }

  function generateSleep2() {
    let dt1 = new Date();
    dt1.setHours(dt1.getHours() + 6);

    setTime21(dt1.getHours() + ":" + dt1.getMinutes());

    let dt2 = new Date();
    dt2.setHours(dt2.getHours() + 7);
    dt2.setMinutes(dt2.getMinutes() + 30);

    setTime22(dt2.getHours() + ":" + dt2.getMinutes());

    let dt3 = new Date();
    dt3.setHours(dt3.getHours() + 9);

    setTime23(dt3.getHours() + ":" + dt3.getMinutes());
  }

  useEffect(() => {
    generateSleep2();
  }, []);

  const [userData, setUserData] = useState({
    labels: HomeData.map((data) => data.day),
    datasets: [
      {
        label: "",
        data: HomeData.map((data) => data.sleep),
        backgroundColor: ["#C2FAF1"],
        foregroundColor: ["#C2FAF1"],
        borderColor: ["#C2FAF1"],
        borderRadius: 10,
        borderWidth: 5,
        pointHitRadius: 100,
        pointHoverRadius: 7,
        pointHoverBackgroundColor: "#C2FAF1",
        pointHoverBorderColor: "#C2FAF1",
      },
    ],
  });

  const [userOptions, setUserOptions] = useState({
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "#FFFFFF",
        },
        ticks: {
          color: "#FFFFFF",
        },
      },
      y: {
        ticks: {
          fontSize: 8,
          color: "#FFFFFF",
        },
        grid: {
          lineWidth: 0,
          color: "#FFFFFF",
        },
      },
    },
  });

  return (
    <>
      <div className="App" id="Home">
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
                    setAlert("Data sent successfully", "success");
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
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, 2);
                      }}
                      ref={inhoursRef}
                      value={inhours}
                      onChange={(e) => {
                        setInhours(inhoursRef.current.value);
                      }}
                    />
                    <p className="goalscontainerinputp">:</p>
                    <input
                      type="number"
                      className="goalscontainergridtopleftinput"
                      onInput={(e) => {
                        e.target.value = Math.max(0, parseInt(e.target.value))
                          .toString()
                          .slice(0, 2);
                      }}
                      ref={inminutesRef}
                      value={inminutes}
                      onChange={(e) => {
                        setInminutes(inminutesRef.current.value);
                      }}
                    />
                    <button
                      className="goalscontainertopleftbutton"
                      onClick={() => {
                        generateSleep1();
                      }}
                    ></button>
                  </div>
                </div>
                <hr className="goalscontainertopsep"></hr>
                <div className="goalscontainergridtopright">
                  <p className="goalscontainerp">
                    You should try to fall asleep at one of the following times:
                  </p>
                  <div className="goalscontainergridtoprighttext">
                    <p className="goalscontainerp">
                      {time11} - {time12} - {time13}
                    </p>
                  </div>
                </div>
                <div className="goalscontainerbottom">
                  <p className="goalscontainerbottomtitle">
                    If you got to bed now, you should wake up at:
                  </p>

                  <div className="goalscontainerbottomtext">
                    <p className="goalscontainerp">
                      {time21} - {time22} - {time23}
                    </p>
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
              <div className="bottompanel2container">
                <BarChart
                  chartData={userData}
                  chartOptions={userOptions}
                ></BarChart>
              </div>
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
