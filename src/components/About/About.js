import Main from "../UI/Main/Main";
import React from "react";

import classes from "./About.module.scss";
import image from "../../assets/WM_oryg.JPG";
const About = () => {
  return (
    <div id="about-section">
      <Main className={classes.about}>
        <div className={classes.description}>
          <p>
            lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem
            lorem loremlorem lorem lorem lorem lorem lorem loremlorem lorem
            lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem
            loremlorem lorem lorem lorem lorem lorem loremlorem
          </p>
        </div>
        <div className={classes.image}>{/* <img src={image} /> */}</div>
      </Main>
    </div>
  );
};

export default About;
