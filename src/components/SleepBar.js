import React from "react";
import { HomeData } from "../Charts Data/HomeData";

function SleepBar({ index }) {
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  const dict = {
    mon: HomeData[0].sleep,
    tue: HomeData[1].sleep,
    wed: HomeData[2].sleep,
    thu: HomeData[3].sleep,
    fri: HomeData[4].sleep,
    sat: HomeData[5].sleep,
    sun: HomeData[6].sleep,
  };

  return (
    <div
      className="daybar"
      style={{
        height: "5px",
        width: dict[days[index]] * 10,
        backgroundColor: "#FFFFFF",
        borderRadius: "5px",
        marginLeft: "15px",
        marginBottom: ".5vh",
      }}
    ></div>
  );
}

export default SleepBar;
