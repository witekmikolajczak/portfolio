import classes from "./PortfolioList.module.scss";
export const PortfolioList = ({ id, title, active, setSelected }) => {
  return (
    <li
      className={[classes.portfolioList, active && classes.active].join(" ")}
      // active ? classes.active : classes.portfolioList
      // className={[classes.menu, menuOpen && classes.active].join(" ")}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
};
