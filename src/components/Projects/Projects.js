import { Link } from "react-router-dom";
import Main from "../UI/Main/Main";
import Card from "../UI/Card/Card";

import classes from "./Projects.module.scss";
const Projects = () => {
  return (
    <div id="projects-section">
      <Main className={classes.projects}>
        <Link to="/weather-app">
          <Card title="weather-app" />
        </Link>
        <Card title="todo-app" />
        <Card title="find_movie-app" />
        <Card title="one-more" />
      </Main>
    </div>
  );
};
export default Projects;
