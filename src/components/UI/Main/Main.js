import classes from "./Main.module.scss";

const Main = (props) => {
  return (
    <div className={`${props.className} ${classes.main}`}>{props.children}</div>
  );
};

export default Main;
