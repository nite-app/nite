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
              <p className="panelitem"></p>
              <p className="panelitem"></p>
              <p className="panelitem"></p>
            </div>
            <div className="panel">
              <h1 className="panelheader">Your Habits</h1>
              <p className="panelitem"></p>
              <p className="panelitem"></p>
              <p className="panelitem"></p>
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
        <div className="maincontainer"></div>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
