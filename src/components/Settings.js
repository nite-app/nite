import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useAuth } from "../contexts/AuthContext";

function Settings({ open, children, onClose }) {
  const { currentUser } = useAuth();
  const { name } = useAuth();
  const { mail } = useAuth();
  const { userColor } = useAuth();

  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];
  const pfpTxt = "" + firstName.split("")[0] + lastName.split("")[0];

  if (!open) return null;
  return (
    <>
      <div className="settingsOverlay" onClick={onClose}></div>
      <div className="settingsModal">
        {children}
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            "& .MuiBox-root": {
              height: 610,
            },
          }}
        >
          <TabContext value={value}>
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
                <div className="tablistContainer">
                  <Box
                    sx={{
                      borderBottom: 1,
                      borderColor: "divider",
                    }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      orientation="vertical"
                      sx={{
                        "& .MuiButtonBase-root": {
                          backgroundColor: "#17223b",
                          marginTop: 1,
                          borderRadius: 2,
                          color: "#FFF",
                        },
                        "& .Mui-selected": {
                          color: "#FFF",
                          backgroundColor: "#0e1629",
                          fontWeight: 500,
                        },
                        "& .MuiTabs-indicator": {
                          backgroundColor: "#AFAFAF",
                          display: "none",
                        },
                      }}
                    >
                      <Tab label="Account" value="1" />
                      <Tab label="About" value="2" />
                      <Tab label="Item Three" value="3" />
                    </TabList>
                  </Box>
                </div>
              </div>
              <div className="settingsSep"></div>
              <div className="settingsContent">
                <button
                  className="settingsCloseBtn"
                  onClick={() => {
                    onClose();
                  }}
                >
                  &#x2613;
                </button>
                <TabPanel value="1" className="tabPanel">
                  <h1 className="settingsTabTitle">My Account</h1>
                  <div className="setAccCtx">
                    <h3 className="settingsTabLabel">Name</h3>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      id="logemail"
                      className="settingsfield"
                      // ref={SettingsNameRef}
                      required
                      value={name}
                    />
                  </div>
                </TabPanel>
                <TabPanel value="2" className="tabPanel">
                  Item Two
                </TabPanel>
                <TabPanel value="3" className="tabPanel">
                  Item Three
                </TabPanel>
              </div>
            </div>
          </TabContext>
        </Box>
      </div>
    </>
  );
}

export default Settings;
