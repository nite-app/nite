import React, { useState } from "react";
import "../App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import temp from "../img/temp.png";
import seticon from "../img/setimg.png";
import searchicon from "../img/searchimg.png";
import signoutimg from "../img/signoutimg.png";
import { useAuth } from "../contexts/AuthContext";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";
import { HomeData } from "../Charts Data/HomeData";
import TextField from "@mui/material/TextField";

function Home() {
  const [error, setError] = useState("");
  const { name } = useAuth();
  const { signout } = useAuth();
  const navigate = useNavigate();

  // component bar, props width

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
          display: false,
          color: "#FFFFFF",
        },
        ticks: {
          color: "#FFFFFF",
        },
      },
      y: {
        ticks: {
          display: false,
          fontSize: 8,
        },
        grid: {
          display: false,
          lineWidth: 0,
        },
      },
    },
  });

  function handleSignout() {
    setError("");

    try {
      signout();
      navigate("/login");
    } catch {
      setError("Failed to Sign Out");
    }
  }

  return (
    <>
      <div className="App" id="Home">
        <div className="sidebar">
          <Link to="/register" style={linkStyle}>
            <div className="account">
              <img src={temp} alt="" id="accImg" />
              <h1 className="accountheader">{name}</h1>
              <img
                src={signoutimg}
                alt=""
                id="signoutimg"
                onClick={handleSignout}
              />
            </div>
          </Link>
          <div className="break">.</div>
          <div className="sidecontent">
            <div className="panel">
              <h1 className="panelheader">Home</h1>
              <p className="panelitem">Overview</p>
              <p className="panelitem">Daily Questions</p>
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
              <img src={seticon} alt="" className="sidemenuicon" />
              <p className="sidemenup">Settings</p>
            </div>
            <div className="menuitem">
              <img src={searchicon} alt="" className="sidemenuicon" />
              <p className="sidemenup">Find</p>
            </div>
          </div>
        </div>
        <div className="maincontainer">
          <h1 className="containerheader">Good morning, {name}</h1>
          <div className="mainpanel1">
            <div className="mainpanel1left">
              <div className="mainpanel1leftleft">
                <LineChart
                  chartData={userData}
                  chartOptions={userOptions}
                  className="HomeLineChart"
                />
              </div>
              <div className="mainpanel1leftright">
                <div className="mainpanel1leftrightcontainer">
                  <h3 className="mainpanel1header3">Week Average</h3>
                  <div className="mainpanel1days">
                    <div className="mainpanel1day">
                      <p className="mainpanel1daytext">Monday</p>
                      <div className="quality green"></div>
                      <div className="sleepbar"></div>
                    </div>
                    <div className="mainpanel1day">
                      <p className="mainpanel1daytext">Tuesday</p>
                      <div className="quality red"></div>
                      <div className="sleepbar"></div>
                    </div>
                    <div className="mainpanel1day">
                      <p className="mainpanel1daytext">Wednesday</p>
                      <div className="quality yellow"></div>
                      <div className="sleepbar"></div>
                    </div>
                    <div className="mainpanel1day">
                      <p className="mainpanel1daytext">Thursday</p>
                      <div className="quality yellow"></div>
                      <div className="sleepbar"></div>
                    </div>
                    <div className="mainpanel1day">
                      <p className="mainpanel1daytext">Friday</p>
                      <div className="quality green"></div>
                      <div className="sleepbar"></div>
                    </div>
                    <div className="mainpanel1day">
                      <p className="mainpanel1daytext">Saturday</p>
                      <div className="quality red"></div>
                      <div className="sleepbar"></div>
                    </div>
                    <div className="mainpanel1day">
                      <p className="mainpanel1daytext">Sunday</p>
                      <div className="quality green"></div>
                      <div className="sleepbar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* SEP */}
            <hr className="mainpanel1sep"></hr>
            {/* SEP */}
            <div className="mainpanel1right">
              <div className="mainpanel1rightcontainer">
                <h3 className="mainpanel1header">How did you sleep?</h3>
                <div className="mainpanel1rightbuttons">
                  <button className="mainpanel1rightbutton">
                    <img
                      src={require("../img/greencircle.png")}
                      alt=""
                      className="mainpanel2rightimg"
                    />
                    <p className="mainpanel2rightbuttontext">
                      Pretty good, i feel great and energic
                    </p>
                  </button>
                  <button className="mainpanel1rightbutton">
                    <img
                      src={require("../img/yellowcircle.png")}
                      alt=""
                      className="mainpanel2rightimg"
                    />
                    <p className="mainpanel2rightbuttontext">
                      It could have been better, but still ok
                    </p>
                  </button>
                  <button className="mainpanel1rightbutton">
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
                <h3 className="mainpanel1header2">How did you sleep?</h3>
                <div className="mainpanel1rightinput">
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
          </div>
          <div className="mainpanelscont">
            <div className="bottompanel">
              <h1 className="bottomh">Which Habits have you respected?</h1>
              <div className="habitscontainer">
                <div className="left">
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/appleicon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Eat Healthy</h4>
                    <input type="checkbox" className="ch" />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/readicon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Read 10 pages</h4>
                    <input type="checkbox" className="ch" />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/meditate.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Meditate</h4>
                    <input type="checkbox" className="ch" />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/workouticon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Train yourself</h4>
                    <input type="checkbox" className="ch" />
                  </div>
                </div>
                {/* SEP */}
                <hr className="sep"></hr>
                {/* SEP */}
                <div className="right">
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/runicon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Run 5Km</h4>
                    <input type="checkbox" className="ch" />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/gamesicon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">No games</h4>
                    <input type="checkbox" className="ch" />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/micicon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Listen to podcast</h4>
                    <input type="checkbox" className="ch" />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/alcoolicon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">No alcool</h4>
                    <input type="checkbox" className="ch" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bottompanel">
              <h1 className="bottomh">Today's Goals</h1>
              <div className="goalscontainer">
                <div className="left">
                  <input type="text" className="input" />
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/workicon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Finish Work</h4>
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/writingicon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Write Essay</h4>
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/handballicon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Play Handball</h4>
                  </div>
                </div>
                {/* SEP */}
                <hr className="sep"></hr>
                {/* SEP */}
                <div className="right2">
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/water.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Drink 1 gallon</h4>
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/illustrations/bookicon.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Read a book</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Home;

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  textAlign: "left",
};
