import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../App.css";

const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    },
  }));

  return (
    <div
      className="snack"
      id={showSnackbar ? "show" : "hide"}
      style={{
        background:
          props.type === "success"
            ? "rgba(112, 224, 0, 0.75)"
            : "rgba(255, 103, 104, 0.75)",
        color: props.type === "success" ? "#000000" : "#FFFFFF",
      }}
    >
      <div className="symbol">
        {props.type === "success" ? <h1>&#x2713;</h1> : <h1>&#x2613;</h1>}
      </div>
      <div className="message">{props.message}</div>
    </div>
  );
});

export default Snackbar;
