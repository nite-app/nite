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
                      src={require("../img/iconamela.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Eat Healthy</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioicon"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/iconalibro.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Read 10 pages</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioicon"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/iconameditazione.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Meditate</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioicon"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/iconaworkout.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Train yourself</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioicon"
                    />
                  </div>
                </div>
                {/* INSERIRE BARRA VERTICALE SEPARATRICE */}
                <div className="right">
                  <div className="inlinewords">
                    <img
                      src={require("../img/iconacorsa.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Run 5Km</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioicon"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/iconagiochi.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">No games</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioicon"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/iconapodcast.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Listen to podcast</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioicon"
                    />
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/iconaalcool.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">No alcool</h4>
                    <img
                      src={require("../img/radio-on-button.png")}
                      alt=""
                      className="radioicon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bottompanel">
              <h1 className="bottomh">Today's Goals</h1>
              <div className="goalscontainer">
                <div className="left">
                    <input type="text" className="input"/>                
                  <div className="inlinewords">
                    <img
                      src={require("../img/iconalavoro.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Finish Work</h4>
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/iconascrittura.png")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Write Essay</h4>
                  </div>
                  <div className="inlinewords">
                    <img
                      src={require("../img/images.jpg")}
                      alt=""
                      className="bottomimg"
                    />
                    <h4 className="bottomword">Play Tennis</h4>
                  </div>                 
                </div>
                <div className="right">
                    <div className="inlinewords">
                      <img
                        src={require("../img/images.jpg")}
                        alt=""
                        className="bottomimg"
                      />  
                      <h4 className="bottomword">Drink 1 gallon</h4>
                    </div>
                    <div className="inlinewords">
                    <img
                      src={require("../img/images.jpg")}
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
