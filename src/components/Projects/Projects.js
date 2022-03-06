import { Fragment } from "react";
import Main from "../UI/Main/Main";
import Card from "../UI/Card/Card";

import classes from "./Projects.module.scss";
const Projects = () => {
  return (
    <Fragment>
      <Main className={classes.projects}>
        <Card title="weather-app" />
        <Card title="todo-app" />
        <Card title="find_movie-app" />
        <Card title="one-more" />
      </Main>
    </Fragment>
  );
};
export default Projects;
