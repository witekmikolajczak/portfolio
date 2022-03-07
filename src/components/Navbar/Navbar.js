import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import classes from "./Navbar.module.scss";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <Link
          activeClass="active"
          to="about-section"
          spy={true}
          // smooth={true}
          duration={500}
        >
          About
        </Link>
      </div>
      <div className={classes.wrapper}>
        <Link
          activeClass="active"
          to="projects-section"
          spy={true}
          // smooth={true}
          duration={700}
        >
          Projects
        </Link>
      </div>
      <div className={classes.wrapper}>
        <Link
          activeClass="active"
          to="contact-section"
          spy={true}
          // smooth={true}
          duration={700}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
