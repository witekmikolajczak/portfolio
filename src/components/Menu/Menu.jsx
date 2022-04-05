import { CloseMenu } from "./CloseMenu";

import classes from "./Menu.module.scss";

export const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={[classes.menu, menuOpen && classes.active].join(" ")}>
      <ul>
        <CloseMenu setMenuOpen={setMenuOpen}>
          <a href="#intro">Home</a>
        </CloseMenu>
        <CloseMenu setMenuOpen={setMenuOpen}>
          <a href="#portfolio">Portfolio</a>
        </CloseMenu>
        {/* <CloseMenu setMenuOpen={setMenuOpen}>
          <a href="#works">Works</a>
        </CloseMenu>
        <CloseMenu setMenuOpen={setMenuOpen}>
          <a href="#testimonials">Testimonials</a>
        </CloseMenu>
        <CloseMenu setMenuOpen={setMenuOpen}>
          <a href="#contact">Contact</a>
        </CloseMenu> */}
      </ul>
    </div>
  );
};
