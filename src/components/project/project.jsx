import React, { useEffect, useState } from "react";
import axios from "axios";
import "./project.css";
import projectImage from "../../assets/project.jpg";

const Project = () => {
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/file/getAllFiles");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching Projects:", error);
      }
    };

    fetchProjects();
  }, []);

  console.log(Project);

  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {Projects.map((Project) => (
          <article className="project__item" key={Project.id}>
            <div className="project__item-image">
              <img src={projectImage} alt={Project.title} />
            </div>
            <div className="project__item-content">
              <h3>{Project.title}</h3>
              <p>{Project.description}</p>
            </div>
            <div className="project__item-cta">
              <a
                href={Project.github}
                target={'_blank'}
                className="btn"
                rel="noreferrer"
              >
                Journal
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
