import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Lajeesh</h1>
        <p className={styles.description}>
          I am fullstack developer with 5 years of experience, with React and
          NodeJS
        </p>
        <a className={styles.contactBtn} href="mailto:lajeeshk@hotmail.com">
          Contact Me
        </a>
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
