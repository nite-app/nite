import "../App.css";
import { Link, Outlet } from "react-router-dom";
import temp from "../img/temp.png";
import seticon from "../img/setimg.png";
import searchicon from "../img/searchimg.png";

function Home() {
  return (
    <>
      <div className="App" id="Home">
        <div className="sidebar">
          <Link to="register">
            <div className="account">
              <img src={temp} alt="" id="accImg" />
              <h1 className="accountheader">Katie McLeen</h1>
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
              <h1 className="panelheader">Your Sleep</h1>
              <p className="panelitem">Add Sleep Insights</p>
              <p className="panelitem">Weekly Report</p>
              <p className="panelitem">Your Notes</p>
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
                      src={require("../img/images.jpg")}
                      alt=""
                      className="bottomimgl"
                    />
                    <h4 className="bottomwordsl">Eat Healthy</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioiconl"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/images.jpg")}
                      alt=""
                      className="bottomimgl"
                    />
                    <h4 className="bottomwordsl">Read 10 Pages</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioiconl"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/images.jpg")}
                      alt=""
                      className="bottomimgl"
                    />
                    <h4 className="bottomwordsl">Meditate</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioiconl"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/images.jpg")}
                      alt=""
                      className="bottomimgl"
                    />
                    <h4 className="bottomwordsl">Train Yourself</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioiconl"
                    />
                  </div>
                </div>

                {/* INSERIRE BARRA VERTICALE SEPARATRICE */}
                <div className="right">
                  <div className="inlinewords">
                    <img
                      src={require("../img/images.jpg")}
                      alt=""
                      className="bottomimgr"
                    />
                    <h4 className="bottomwordsr">Run 5 km</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioiconr"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/images.jpg")}
                      alt=""
                      className="bottomimgr"
                    />
                    <h4 className="bottomwordsr">No games</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioiconr"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/images.jpg")}
                      alt=""
                      className="bottomimgr"
                    />
                    <h4 className="bottomwordsr">Listen to podcast</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioiconr"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/images.jpg")}
                      alt=""
                      className="bottomimgr"
                    />
                    <h4 className="bottomwordsr">Don't drink alcool</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioiconr"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bottompanel">
              <h1 className="bottomh">Today's Goals</h1>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
