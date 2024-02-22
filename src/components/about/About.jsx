import React from "react";
import { getImageUrl } from "../../utils";

function About() {
  return (
    <section>
      <h2>About</h2>
      <div>
        <img src={getImageUrl("about/aboutImage.png")} alt="about image" />
        <ul>
          <li>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor img" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
