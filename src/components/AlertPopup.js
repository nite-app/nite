import React, { useState, useEffect } from "react";
import { Alert, Fade, Grow, Snackbar } from "@mui/material";
import useAlert from "../hooks/useAlert";

function AlertPopup() {
  const { text, type } = useAlert();

  if (text && type) {
    return (
      <div className="alertBox">
        <Snackbar
          TransitionComponent={Fade}
          transitionDuration={{ enter: 500, exit: 500 }}
          TransitionProps={{ enter: true, exit: false }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
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
          ) : (<></>)
        </Snackbar>
      </div>
    );
  }
}

export default AlertPopup;
