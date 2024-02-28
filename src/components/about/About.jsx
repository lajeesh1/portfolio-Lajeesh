import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./about.module.css";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("about/aboutImage.png")}
          alt="about image"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor img" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor img" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>NodeJS, Mongo, SQL</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor img" />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>Figma, Photoshop</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
