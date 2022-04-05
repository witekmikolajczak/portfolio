import classes from "./About.module.scss";
export const About = () => {
  return (
    <div className={classes.about}>
      <h1>About</h1>
      <div className={classes.wrapper}>
        <p>
          I am a student of the "WSB University" in Poznan with an IT profile. I
          graduated from one of the best IT technicians in Greater Poland. I
          started my adventure with programming at the age of 16. Today I am
          developing towards the front end and programming in JavaScript has
          become my passion, and more specifically in React. Please see my
          github and contact me. Also, if you are not interested in working with
          me, I would like to ask for an e-mail, what can I change.
        </p>
      </div>
    </div>
  );
};
