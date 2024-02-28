import React from "react";
import projects from "../../Data/projects.json";

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((project, id) => (
          <div key={id}>
            <img src={project.imageSrc} alt={`image of ${project.title}`} />
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
