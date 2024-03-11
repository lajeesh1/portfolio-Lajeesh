import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./about.module.css";

function Skill() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Skill</h2>

      <div className={styles.content}>
        {/* <img
          className={styles.aboutImage}
          src={getImageUrl("skill/aboutImage.png")}
          alt="about image"
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.image}>
              <p>front-end</p>
              <img src={getImageUrl("skill/frontend.png")} alt="cursor img" />
            </div>
            <div className={styles.aboutItemText}>
              <div className={styles.skills}>
                <p className={styles.skill}>HTML</p>
                <p className={styles.skill}>CSS</p>
                <p className={styles.skill}>Javascript</p>
                <p className={styles.skill}>React</p>
                <p className={styles.skill}>Tailwind</p>
                <p className={styles.skill}>Bootstrap</p>
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.image}>
              <p>Back-end</p>
              <img src={getImageUrl("skill/backend.png")} alt="cursor img" />
            </div>
            <div className={styles.aboutItemText}>
              <div className={styles.skills}>
                <p className={styles.skill}>NodeJS</p>
                <p className={styles.skill}>MongoDB</p>
                <p className={styles.skill}>SQL</p>
                <p className={styles.skill}>Java</p>
              </div>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.image}>
              <p>Tools</p>
              <img src={getImageUrl("skill/ui.png")} alt="cursor img" />
            </div>
            <div className={styles.aboutItemText}>
              <div className={styles.skills}>
                <p className={styles.skill}>Figma</p>
                <p className={styles.skill}>Git</p>
                <p className={styles.skill}>VsCode</p>
                <p className={styles.skill}>Photoshop</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Skill;
