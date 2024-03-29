import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import fb from "../../../assets/socialMedia/fb.png";
import git from "../../../assets/socialMedia/git.png";
import linkedin from "../../../assets/socialMedia/linkedin.png";
import insta from "../../../assets/socialMedia/insta.png";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Lajeesh</h1>
        <p className={styles.description}>
          Currently a Systems Manager at Sree Gokulam Group, I'm working towards
          becoming a proficient MERN stack developer.
        </p>
        {/* <a className={styles.contactBtn} href="mailto:lajeeshk@hotmail.com">
          Contact Me
        </a> */}
        <div className={styles.socialMedia}>
          <img src={git} alt="git" />
          <img src={fb} alt="facebook" />

          <img src={linkedin} alt="linkdin" />
          <img src={insta} alt="insta" />
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt=""
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
