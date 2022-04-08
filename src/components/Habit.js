import React from "react";

function Habit({ icon, text }) {
  return (
    <div className="inlinewords">
      <img
        src={require(`../img/illustrations/${icon}`)}
        alt=""
        className="bottomimg"
      />
      <h4 className="bottomword">{text}</h4>
      <input type="checkbox" className="ch" />
    </div>
  );
}

export default Habit;
