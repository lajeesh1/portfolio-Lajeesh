import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./about.module.css";

function Skill() {
  return (
    <section className={styles.container} id="about">
      

      <div className={styles.content}>
        {/* <img
          className={styles.aboutImage}
          src={getImageUrl("skill/aboutImage.png")}
          alt="about image"
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.image}>
            <div className={styles.title}> <h3>Skill</h3> </div>
              
            </div>
            <div className={styles.aboutItemText}>
              <ul className={styles.skills}>
                <li className={styles.skill}>
                  <div className={styles.html}>
                    <p>HTML & CSS</p>
                    
                  </div>
                </li>

                <li className={styles.skill}>
                  <div className={styles.javascript}>
                    <p>Javascript</p>
                    
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.react}>
                    <p>React</p>
                    
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.node}>
                    <p>Node</p>
                    
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.mongo}>
                    <p>MongoDb</p>
                    
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.sql}>
                    <p>SQL</p>
                   
                  </div>
                </li>

                <li className={styles.skill}>
                  <div className={styles.tailwind}>
                    <p>Tailwind</p>
                    
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.bootstrap}>
                    <p>Bootstrap</p>
                    
                  </div>
                </li>
                <li className={styles.skill}>
                  <div className={styles.figma}>
                    <p>Figma</p>
                   
                  </div>
                </li>
                
                <li className={styles.skill}>
                  <div className={styles.git}>
                    <p>Git</p>
                    
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
