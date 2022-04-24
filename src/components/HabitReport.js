import React from "react";

function HabitReport({ icon, text, number }) {
  return (
    <div className="inlinewords">
      <img
        src={require(`../img/illustrations/${icon}`)}
        alt=""
        className="bottomimg"
      />
      <h4 className="bottomword">{text}</h4>
      <h4 className="habitNumber">{number}</h4>
    </div>
  );
}

export default HabitReport;
