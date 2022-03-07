import React, { useState } from "react";

import classes from "./Button.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  const [scroll, setScroll] = useState();

  const topFunction = () => {
    document.documentElement.scrollTop = 0;
    console.log("clicked");
  };

  window.onscroll = (e) => {
    setScroll(window.scrollY);
    console.log(scroll);
  };

  return (
    <button
      id="btn"
      onClick={topFunction}
      className={scroll > 115 ? classes.button : classes.hide}
    >
      <FontAwesomeIcon icon={faAngleUp} size="lg" />
    </button>
  );
};

export default Button;
