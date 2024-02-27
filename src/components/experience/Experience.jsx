import React from "react";
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";
function Experience() {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skill}>
          {skills.map((skill, id) => (
            <div className={styles.skillImageContainer} key={id}>
              <div>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map((history, id) => (
            <li className={styles.historyItem} key={id}>
              <img
                src={getImageUrl(history.imageSrc)}
                alt={`${history.organisation} logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${history.role}, ${history.organisation}`}</h3>
                <p>{`${history.startDate} - ${history.endDate}`}</p>
                <ul>
                  {history.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Experience;
