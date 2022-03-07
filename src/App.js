import React from "react";

import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Button from "./components/UI/Button/Button";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Footer />
      <Button />
    </div>
  );
}

export default App;
