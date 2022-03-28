import { Link } from "react-router-dom";
import Main from "../UI/Main/Main";
import Card from "../UI/Card/Card";
import React from "react";
import classes from "./Projects.module.scss";
const Projects = () => {
  return (
    <div id="projects-section">
      <Main className={classes.projects}>
        <Card
          title={
            <a href="https://witekmikolajczak-weather-app.herokuapp.com/">
              Weather-app
            </a>
          }
        />
        <Link to="/todo-app" className={classes["slide-right"]}>
          <Card title="todo-app" />
        </Link>
        <Card title="find_movie-app" />
        <Card title="one-more" />
      </Main>
    </div>
  );
};
export default Projects;
