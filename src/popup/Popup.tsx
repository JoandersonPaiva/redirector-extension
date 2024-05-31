import React from "react";
import OpenOptionsPage from "../components/OpenOptionsPage/OpenOptionsPage";
import PopupRules from "../components/PopupRules/PopupRules";

const Popup: React.FC = () => {
  return (
    <div className="popup">
      <PopupRules />
      <OpenOptionsPage />
    </div>
  );
};

export default Popup;
