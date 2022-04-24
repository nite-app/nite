import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../App.css";

const Snackbar = forwardRef((props, ref) => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  useImperativeHandle(ref, () => ({
    show() {
      setShowSnackbar(true);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 2950);
    },
  }));

  return (
    <div
      className="snack"
      id={showSnackbar ? "show" : "hide"}
      style={{
        background:
          props.type === "success"
            ? "rgba(82, 182, 82, 1)"
            : "rgba(200, 94, 94, 1)",
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
