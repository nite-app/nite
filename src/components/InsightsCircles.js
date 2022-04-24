import React from "react";

function InsightsCircles(props) {
  return (
    <>
      <p className="insightHabit">{props.habit.name}</p>
      <div className="insightsCircles">
        <div className="insightdiv">
          <div className="insightcircle">
            {props.habit.done[0] ? (
              <h1 className="insightsdone">&#x2713;</h1>
            ) : (
              <h1 className="insightsdone">&#x2613;</h1>
            )}
          </div>
          <p className="insightday">{props.habit.days[0]}</p>
        </div>
        <div className="insightdiv">
          <div className="insightcircle">
            {props.habit.done[1] ? (
              <h1 className="insightsdone">&#x2713;</h1>
            ) : (
              <h1 className="insightsdone">&#x2613;</h1>
            )}
          </div>
          <p className="insightday">{props.habit.days[1]}</p>
        </div>

        <div className="insightdiv">
          <div className="insightcircle">
            {props.habit.done[2] ? (
              <h1 className="insightsdone">&#x2713;</h1>
            ) : (
              <h1 className="insightsdone">&#x2613;</h1>
            )}
          </div>
          <p className="insightday">{props.habit.days[2]}</p>
        </div>

        <div className="insightdiv">
          <div className="insightcircle">
            {props.habit.done[3] ? (
              <h1 className="insightsdone">&#x2713;</h1>
            ) : (
              <h1 className="insightsdone">&#x2613;</h1>
            )}
          </div>
          <p className="insightday">{props.habit.days[3]}</p>
        </div>

        <div className="insightdiv">
          <div className="insightcircle">
            {props.habit.done[4] ? (
              <h1 className="insightsdone">&#x2713;</h1>
            ) : (
              <h1 className="insightsdone">&#x2613;</h1>
            )}
          </div>
          <p className="insightday">{props.habit.days[4]}</p>
        </div>

        <div className="insightdiv">
          <div className="insightcircle">
            {props.habit.done[5] ? (
              <h1 className="insightsdone">&#x2713;</h1>
            ) : (
              <h1 className="insightsdone">&#x2613;</h1>
            )}
          </div>
          <p className="insightday">{props.habit.days[5]}</p>
        </div>

        <div className="insightdiv">
          <div className="insightcircle">
            {props.habit.done[6] ? (
              <h1 className="insightsdone">&#x2713;</h1>
            ) : (
              <h1 className="insightsdone">&#x2613;</h1>
            )}
          </div>
          <p className="insightday">{props.habit.days[6]}</p>
        </div>
      </div>
    </>
  );
}

export default InsightsCircles;
