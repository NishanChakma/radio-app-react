import React from "react";

import goback from "../../Assests/png/back-arrow.png";
import switchButton from "../../Assests/png/switch.png";

function Header() {
  return (
    <div className="header">
      <img src={goback} alt="Back Button" />
      <p className="header_text">STATIONS</p>
      <img src={switchButton} alt="switchButton" />
    </div>
  );
}

export default Header;
