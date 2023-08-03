import React from "react";
import "./project.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";

// Publication items data
const projectItems = [
  {
    id: 1,
    title: "A Unified Framework for Effective Team Formation in Social Networks.",
    img: IMG1,
    description: "ID 1",
    link: "",
    github: "",
  },
  {
    id: 2,
    title: "Dynamic Network Link Prediction by Learning Effective Subgraphs using CNN-LSTM",
    img: IMG4,
    description: "ID 2",
    link: "https://kalyanis.myweb.cs.uwindsor.ca/publications/linkijcnn.pdf",
    github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
  },
  {
    id: 3,
    title: "RubyCode Blog Project",
    img: IMG2,
    description: "ID 3.",
    link: "https://rubycode-blog-project.vercel.app/",
    github: "https://github.com/Rasif-Taghizada/RubyCode-Blog",
  },
];

const Project = () => {
  return (
    <section id="project">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container project__container">
        {projectItems.map((project) => (
          <article className="project__item" key={project.id}>
            <div className="project__item-image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project__item-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project__item-cta">
              <a
                href={project.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Journal
              </a>
              <a
                href={project.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                PDF
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
