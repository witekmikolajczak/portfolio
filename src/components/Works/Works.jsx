import classes from "./Works.module.scss";

export const Works = () => {
  return (
    <div className={classes.works} id="works">
      <div className={classes.slider}>
        <div className={classes.container}>
          <div className={classes.item}>
            <div className={classes.left}>
              <div className={classes.leftContainer}>
                <div className={classes.imgContainer}>
                  <img src="assets/mobile.png" alt="text" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptate facilis illum eius itaque sed totam tempora optio
                  voluptatum, dolorem, maxime aliquid, sapiente laboriosam
                  assumenda doloremque praesentium vitae consequatur ducimus
                  velit.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className={classes.right}>
              <img
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
