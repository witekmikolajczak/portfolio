import React, { useState } from "react";

import { Topbar } from "./components/Topbar/Topbar";
import { Intro } from "./components/Intro/Intro";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { About } from "./components/About/About";
import { Works } from "./components/Works/Works";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { Contact } from "./components/Contact/Contact";
import { Menu } from "./components/Menu/Menu";
import classes from "./App.module.scss";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={classes.app}>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={classes.sections}>
        <Intro />
        <Portfolio />
        <About />

        {/* <Works />
        <Testimonials />
        <Contact /> */}
      </div>
    </div>
  );
}

export default App;
