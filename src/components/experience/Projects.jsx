// import React from "react";
// import skills from "../../Data/skills.json";
// import history from "../../Data/history.json";
// import { getImageUrl } from "../../utils";
// import styles from "./Experience.module.css";
// function Projects() {
//   return (
//     <section className={styles.container} id="experience">
//       <h3 className={styles.title}>Projects</h3>
//       <div className={styles.content}>
//         <ul className={styles.history}>
//           {history.map((history, id) => (
//             <li className={styles.historyItem} key={id}>
              
//               <img
//                 src={getImageUrl(history.imageSrc)}
//                 alt={`${history.app} logo`}
//               />
//               <div className={styles.historyItemDetails}>
//                 <p>{`${history.role}`}</p>
//                 <h3 className={styles.company}>{` ${history.organisation}`}</h3>
//                 <p>{`${history.startDate}  ${history.endDate}`}</p>
//                 <ul>
//                   {history.experiences.map((experience, id) => (
//                     <li key={id}>{experience}</li>
//                   ))}
//                 </ul>
//               </div> 
//               <div className={styles.blur}></div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import React from "react";
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

function Projects() {
  return (
    <section className={styles.container} id="experience">
      <h3 className={styles.title}>Projects <br /> <span>Github Repositories</span></h3>
      
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((item, id) => (
            <li className={styles.historyItem} key={id}>
              <a href={`${item.link}`} target="_blank" rel="noopener noreferrer" className={styles.historyLink}>
                <img
                  src={getImageUrl(item.imageSrc)}
                  alt={`${item.app} logo`}
                />
                <div className={styles.historyItemDetails}>
                  <p>{`${item.role}`}</p>
                  
                  <p>{`${item.startDate}  ${item.endDate}`}</p>
                  <ul>
                    {item.experiences.map((experience, idx) => (
                      <li key={idx}>{experience}</li>
                    ))}
                  </ul>
                </div>
                
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;

