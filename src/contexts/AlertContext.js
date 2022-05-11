import React, { createContext, useState, useEffect } from "react";

const alert_time = 5000;
const initialstate = {
  type: "",
  message: "",
};

const AlertContext = createContext({
  ...initialstate,
  setAlert: () => {},
});

export const AlertProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [type, setType] = useState("");

  const setAlert = (text, type) => {
    setText(text);
    setType(type);

    setTimeout(() => {
      setText("");
      setType("");
    }, alert_time);
  };

  return (
    <AlertContext.Provider
      value={{
        text,
        type,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
