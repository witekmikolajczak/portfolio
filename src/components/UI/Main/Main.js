import classes from "./Main.module.scss";
import React from "react";
const Main = (props) => {
  return (
    <div className={`${props.className} ${classes.main}`}>{props.children}</div>
  );
};

export default Main;
