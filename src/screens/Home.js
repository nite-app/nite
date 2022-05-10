import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  setDoc,
} from "firebase/firestore";
import seticon from "../img/setimg.png";
import searchicon from "../img/searchimg.png";
import signoutimg from "../img/signoutimg.png";
import { useAuth } from "../contexts/AuthContext";
import LineChart from "../components/Charts/LineChart";
import { HomeData } from "../Charts Data/HomeData";
import TextField from "@mui/material/TextField";
import HomeDay from "../components/HomeDay";
import Habit from "../components/Habit";
import Settings from "../components/Settings";
import { Alert, Fade, Grow, Snackbar } from "@mui/material";

function Home() {
  const { signout } = useAuth();
  const { currentUser } = useAuth();
  const { name } = useAuth();
  const { mail } = useAuth();
  const { userColor } = useAuth();
  const navigate = useNavigate();
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const [error, setError] = useState("");
  const [errType, setErrType] = useState("success");
  const [errorExists, setErrorExists] = useState(false);
  // error, info, warning, success

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  const pfpTxt = "" + firstName.split("")[0] + lastName.split("")[0];

  const [settingsOpen, setSettingsOpen] = useState(false);

  const db = getFirestore();

  // component bar, props width
  const [barWidth, setBarWidth] = useState();

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
    try {
      signout();
      setError("Signed out successfully!");
      setErrType("success");
      navigate("/briefing");
    } catch {
      setError("Failed to Sign Out");
      setErrType("error");
    }
  }

  function fetchQuote() {
    axios
      .get("https://api.quotable.io/random")
      .then((response) => {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchQuote();
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
          <h1 className="containerheader">Good morning, {firstName}</h1>
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
                    <HomeDay index={0} />
                    <HomeDay index={1} />
                    <HomeDay index={2} />
                    <HomeDay index={3} />
                    <HomeDay index={4} />
                    <HomeDay index={5} />
                    <HomeDay index={6} />
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
                  <button
                    className="mainpanel1rightbutton"
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
                  <button
                    className="mainpanel1rightbutton"
                    onClick={() => {
                      setError("Data sent successfully");
                      setErrType("warning");
                    }}
                  >
                    <img
                      src={require("../img/yellowcircle.png")}
                      alt=""
                      className="mainpanel2rightimg"
                    />
                    <p className="mainpanel2rightbuttontext">
                      It could have been better, but still ok
                    </p>
                  </button>
                  <button
                    className="mainpanel1rightbutton"
                    onClick={() => {
                      setError("Data sent successfully");
                      setErrType("error");
                    }}
                  >
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
                <h3 className="mainpanel1header2">How long did you sleep?</h3>
                <div className="mainpanel1rightinput">
                  <TextField
                    id="filled-basic"
                    label="Hours"
                    variant="standard"
                    type="number"
                    margin="none"
                    size="small"
                    onInput={(e) => {
                      e.target.value = Math.max(0, parseInt(e.target.value))
                        .toString()
                        .slice(0, 2);
                    }}
                    min={0}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mainpanelscont">
            <div className="bottompanel">
              <h1 className="bottomh">Which habits have you respected?</h1>
              <div className="habitscontainer">
                <div className="left">
                  <Habit icon={"appleicon.png"} text={"Eat healthy"} />
                  <Habit icon={"readicon.png"} text={"Read a book"} />
                  <Habit icon={"alcoolicon.png"} text={"Don't drink alcool"} />
                  <Habit icon={"gamesicon.png"} text={"No games"} />
                </div>
                {/* SEP */}
                <hr className="sep"></hr>
                {/* SEP */}
                <div className="right">
                  <Habit icon={"handballicon.png"} text={"Play handball"} />
                  <Habit icon={"meditate.png"} text={"Meditate"} />
                  <Habit icon={"workouticon.png"} text={"Train yourself"} />
                  <Habit icon={"runicon.png"} text={"Run 5 km"} />
                </div>
              </div>
            </div>
            <div className="bottompanel">
              <h1 className="bottomh">Random quote</h1>
              <div className="quotecontainer">
                <h1 className="quote">"{quote}"</h1>
                <h3 className="author">- {author}</h3>
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
