import React, { useState } from "react";
import { HomeData } from "../Charts Data/HomeData";

function DayCircle({ index }) {
  return <div className={"quality" + HomeData[index].color.toString}></div>;
}

export default DayCircle;
