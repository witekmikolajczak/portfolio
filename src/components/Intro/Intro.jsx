import { init } from "ityped";
import { useEffect, useRef } from "react";

import classes from "./Intro.module.scss";

export const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    const spanElement = textRef.current;
    init(spanElement, {
      showCursor: true,
      strings: ["React Developer", "JavaScript Developer", "HTML & CSS"],
      backDelay: 1500,
      backSpeed: 40,
    });
  }, []);
  return (
    <div className={classes.intro} id="intro">
      <div className={classes.left}>
        <div className={classes.image}>
          <img src="assets/profile-image.png"></img>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.wrapper}>
          <h2>Hi There, i'm</h2>
          <h1>Witek Mikolajczak</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};
