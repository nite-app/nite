import React, { Component } from "react";
import "../App.css";
import { Link, Outlet } from "react-router-dom";
import temp from "../img/temp.png";
import seticon from "../img/setimg.png";
import searchicon from "../img/searchimg.png";

export default class Page2 extends Component {
  render() {
    return (
      <>
        <div className="App" id="Home">
          <div className="sidebar">
            <Link to="register" style={linkStyle}>
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
                <Link to="page2" style={linkStyle}>
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
            <h1 className="containerheader">Your Sleep</h1>
            <div className="mainpanel1">
              <div className="mainpanelleft">
                <h1 className="mainpanelleftheader">About tonight</h1>
                <p className="mainpanellefttext">
                Take a couple minutes  to reflect on your sleep: write down what
                you think is more important
                </p>  
              </div>   
              <div className="mainpanelcenter">
                <h1 className="mainpanelcenterheader">Do you remember a dream?</h1>
               
              </div>                    
            </div>
            <hr className="mainpanelsep"></hr>
            <div className="mainpanelscont">
              <div className="bottompanel"></div>
              <div className="bottompanel"></div>
            </div>
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}

const linkStyle = {
  textDecoration: "none",
  color: "#000",
  textAlign: "left",
};
