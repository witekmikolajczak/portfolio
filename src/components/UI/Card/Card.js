import classes from "./Card.module.scss";
import React from "react";
const Card = (props) => {
  return (
    <div className={classes.card}>
      <h2>{props.title}</h2>
    </div>
  );
};
export default Card;
