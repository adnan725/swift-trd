import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.headingWrapper}>
            <span className={styles.subHeading}>Your Satisfaction</span>
            <div className={styles.line}></div>
          </div>
          <div className={styles.heading}>Our Priority</div>
        </div>
        <div className={styles.image}>
          <img src={process.env.PUBLIC_URL + "/media/images/scissor.png"} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
