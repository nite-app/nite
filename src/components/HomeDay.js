import React from "react";
import SleepBar from "./SleepBar";
import DayCircle from "./DayCircle";

function HomeDay({ index }) {
  let days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <div className="mainpanel1day">
      <p className="mainpanel1daytext">{days[index]}</p>
      <DayCircle />
      <SleepBar index={index} />
    </div>
  );
}

export default HomeDay;
