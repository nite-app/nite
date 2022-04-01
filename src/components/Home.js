import React from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
import temp from "../img/temp.png";
import seticon from "../img/setimg.png";
import searchicon from "../img/searchimg.png";
import { useAuth } from "../contexts/AuthContext";

function Home() {
  const { currentUser } = useAuth();

  return (
    <>
      <div className="App" id="Home">
        <div className="sidebar">
          <Link to="/register" style={linkStyle}>
            <div className="account">
              <img src={temp} alt="" id="accImg" />
              <h1 className="accountheader">{currentUser.email}</h1>
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
          <h1 className="containerheader">Good morning, Katie</h1>
          <div className="mainpanel1">.</div>
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
