import React, { useState } from "react";
import style from "../App.css";
import css from "classnames";

function Alert({ children, type, message }) {
  const [isShown, setIsShown] = useState(true);

  function renderAlert() {
    return React.cloneElement(children);
  }

  const handleClose = (e) => {
    e.preventDefault();
    setIsShown(false);
  };

  return (
    <div className={css(style.alert, style[type], !isShown && style.alerthide)}>
      <span className="alertclosebtn"> &times;</span>
      {children ? renderAlert() : message}
    </div>
  );
}

export default Alert;
