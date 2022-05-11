import React, { useState, useEffect } from "react";
import {
  Alert,
  bottomNavigationActionClasses,
  Fade,
  Grow,
  Snackbar,
} from "@mui/material";
import useAlert from "../hooks/useAlert";

function AlertPopup() {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <div className="alertContainer">
        <div className="alertBox">
          <Alert
            severity={type}
            sx={{
              width: "100%",
              "& .MuiAlert-message": {
                fontSize: 20,
                paddingHorizontal: 3,
              },
              "& .MuiAlert-icon": {
                fontSize: 30,
              },
            }}
          >
            {text}
          </Alert>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default AlertPopup;
