import React, { useState, useCallback } from "react";
import minusButton from "../../Assests/png/minus.png";
import plusButton from "../../Assests/png/plus.png";
import defaultImg from "../../Assests/png/default.png";

function Home() {
  const [toggle, setToggle] = useState(false);

  const onPressFunc = useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  return (
    <div className="home">
      {toggle && (
        <span className="span">
          <img src={minusButton} alt="minusButton" className="plus_minus" />
          <img src={defaultImg} alt="plusButton" className="default_logo" />
          <img src={plusButton} alt="defaultImg" className="plus_minus" />
        </span>
      )}

      <div className="channel_group" onClick={() => onPressFunc()}>
        <p>Putin FM</p>
        <p>98.0</p>
      </div>
    </div>
  );
}

export default Home;
