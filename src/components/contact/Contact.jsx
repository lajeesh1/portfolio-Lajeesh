import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out !</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="" />
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />
          <a href="https://www.linkedin.com/home">Linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="" />
          <a href="https://github.com/">Github</a>
        </li>
      </ul>
    </footer>
  );
}
export default Contact;
