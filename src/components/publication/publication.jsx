import "./publication.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import React from "react";

//Publication function
const Publication = () => {
  const soloProjects = [
    {
      id: 1,
      title: "A Unified Framework for Effective Team Formation in Social Networks.",
      img: IMG1,
      description:
        "ID 1",
//      technologies: "Html | CSS | Javascript | React Js",
      link: "https://kalyanis.myweb.cs.uwindsor.ca/publications/teamJournalmain.pdf",
      github: "https://www.sciencedirect.com/journal/expert-systems-with-applications",
    },
    {
      id: 2,
      title: "Dynamic Network Link Prediction by Learning Effective Subgraphs using CNN-LSTM",
      img: IMG4,
      description:
        "ID 2",
//      technologies: "React | Redux",
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

  return (
    <section id="publication">
      <h5>My Recent Work</h5>
      <h2>Publications</h2>

      <div className="container publication__container">
        {soloProjects.map((pro) => (
          <article className="publication__item" key={pro.id}>
            <div className="publication__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="publication__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="publication__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Journal
              </a>
              <a
                href={pro.link}
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

export default Publication;
