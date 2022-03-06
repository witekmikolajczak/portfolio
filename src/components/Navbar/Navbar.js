import classes from "./Navbar.module.scss";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <a href="#">About</a>
      </div>
      <div className={classes.wrapper}>
        <a href="#">Projects</a>
      </div>
      <div className={classes.wrapper}>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};
export default Navbar;
