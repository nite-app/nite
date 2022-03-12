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
          {/* <Link to="register">register</Link> */}
          <div className="account">
            <img src={temp} alt="" id="accImg" />
            <h1 className="accountheader">Katie McLeen</h1>
          </div>
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
