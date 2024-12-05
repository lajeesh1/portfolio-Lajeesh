

import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import fb from "../../../assets/socialMedia/fb.png";
import git from "../../../assets/socialMedia/git.png";
import linkedin from "../../../assets/socialMedia/linkedin.png";
import insta from "../../../assets/socialMedia/insta.png";

function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <br />
          Lajeesh{" "}
        </h1>
        <p className={styles.description}>
          Currently a Systems Manager at Sree Gokulam Group, <br /> I'm working
          towards becoming a proficient MERN stack developer.
        </p>
        <div className={styles.socialMedia}>
          <a
            href="https://github.com/lajeesh1?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={git} alt="git" />
          </a>
          <img src={fb} alt="facebook" />
          <img src={linkedin} alt="linkedin" />
          <img src={insta} alt="insta" />
        </div>
        <button onClick={scrollToContact} className={styles.contactButton}>
          Contact Me
        </button>
      </div>
      <div className={styles.img}><img
      loading="lazy"
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage_3.png") || "/fallback-image.png"}
        alt="Hero"
      /></div>
      
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
}

export default Hero;
