import { Person, Mail } from "@material-ui/icons";
import classes from "./Topbar.module.scss";

export const Topbar = ({ menuOpen, setMenuOpen, ...props }) => {
  return (
    <div className={[classes.topbar, menuOpen && classes.active].join(" ")}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <a href="#intro" className={classes.logo}>
            {" "}
            genius.
          </a>
          <div className={classes.itemContainer}>
            <Person className={classes.icon} />
            <span>+48 731 591 188</span>
          </div>
          <div className={classes.itemContainer}>
            <Mail className={classes.icon} />
            <span>witekmikolajczak@gmail.com</span>
          </div>
        </div>

        <div className={classes.right}>
          <div
            className={classes.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={classes.line1}></span>
            <span className={classes.line2}></span>
            <span className={classes.line3}></span>
          </div>
        </div>
      </div>
    </div>
  );
};
