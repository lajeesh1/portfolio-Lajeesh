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
              <img src={getImageUrl("skill/frontend.png")} alt="cursor img" />
            </div>
            <div className={styles.aboutItemText}>
              <ul className={styles.skills}>
                <li className={styles.skill}>
                  <div className={styles.html}>
                    <p>HTML & CSS</p>
                    <h5>90%</h5>
                  </div>
                </li>

                <li className={styles.skill}>
                  <div className={styles.javascript}>
                    <p>Javascript</p>
                    <h5>65%</h5>
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.react}>
                    <p>React</p>
                    <h5>60%</h5>
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.node}>
                    <p>Node</p>
                    <h5>35%</h5>
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.mongo}>
                    <p>MongoDb</p>
                    <h5>60%</h5>
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.sql}>
                    <p>SQL</p>
                    <h5>35%</h5>
                  </div>
                </li>

                <li className={styles.skill}>
                  <div className={styles.tailwind}>
                    <p>Tailwind</p>
                    <h5>75%</h5>
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.bootstrap}>
                    <p>Bootstrap</p>
                    <h5>50%</h5>
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.bootstrap}>
                    <p>Figma</p>
                    <h5>50%</h5>
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.bootstrap}>
                    <p>Photoshop</p>
                    <h5>50%</h5>
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.bootstrap}>
                    <p>Git</p>
                    <h5>50%</h5>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          {/* <li className={styles.aboutItem}>
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
          </li> */}
        </ul>
      </div>
    </section>
  );
}

export default Skill;
