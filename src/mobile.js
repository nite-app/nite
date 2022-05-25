import React from "react";

function mobile() {
  return (
    <>
      <div className="mobilediv">
        <img src={require("./img/logo.png")} className="mobilelogo" />
        <h1 className="mobilettl">
          We are sorry, nite is currently available only on desktop devices
        </h1>
        <h2 className="mobilesub">Stay tuned for more news</h2>
      </div>
    </>
  );
}

export default mobile;
