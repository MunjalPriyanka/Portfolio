import React from "react";
import "./publication.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";

// Publication items data
const publicationItems = [
  {
    id: 1,
    title: "A Unified Framework for Effective Team Formation in Social Networks.",
    img: IMG1,
    description: "ID 1",
    link: "https://kalyanis.myweb.cs.uwindsor.ca/publications/teamJournalmain.pdf",
    github: "https://www.sciencedirect.com/journal/expert-systems-with-applications",
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

const Publication = () => {
  return (
    <section id="publication">
      <h5>My Recent Work</h5>
      <h2>Publications</h2>

      <div className="container publication__container">
        {publicationItems.map((publication) => (
          <article className="publication__item" key={publication.id}>
            <div className="publication__item-image">
              <img src={publication.img} alt={publication.title} />
            </div>
            <div className="publication__item-content">
              <h3>{publication.title}</h3>
              <p>{publication.description}</p>
            </div>
            <div className="publication__item-cta">
              <a
                href={publication.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Journal
              </a>
              <a
                href={publication.link}
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
