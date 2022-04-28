import React from "react";

function Settings({ open, children, onClose }) {
  if (!open) return null;
  return (
    <>
      <div className="settingsOverlay" onClick={onClose}></div>
      <div className="settingsModal">{children}</div>
    </>
  );
}

export default Settings;
