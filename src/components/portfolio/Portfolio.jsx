import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import IMG5 from "../../assets/Jokes Project.jpg";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "A Unified Framework for Effective Team Formation in Social Networks.",
      img: IMG1,
      description:
        "Selvarajah, K., Zadeh, P.M., Kobti, Z., Palanichamy, Y. and Kargar, M., Expert Systems with Applications, p.114886, 2021",
//      technologies: "Html | CSS | Javascript | React Js",
      link: "https://kalyanis.myweb.cs.uwindsor.ca/publications/teamJournalmain.pdf",
      github: "https://www.sciencedirect.com/journal/expert-systems-with-applications",
    },
    {
      id: 2,
      title: "Dynamic Network Link Prediction by Learning Effective Subgraphs using CNN-LSTM",
      img: IMG4,
      description:
        "K. Selvarajah, K. Ragunathan, Z. Kobti and M. Kargar, International Joint Conference on Neural Networks (IJCNN), pp. 1-8, IJCNN 2020",
//      technologies: "React | Redux",
      link: "https://kalyanis.myweb.cs.uwindsor.ca/publications/linkijcnn.pdf",
      github: "https://github.com/Rasif-Taghizada/Covid-19-Tracking",
    },
    {
      id: 3,
      title: "RubyCode Blog Project",
      img: IMG2,
      description: "This site is a kind of social media platform. You can register and share your posts.",
      technologies: "React | Redux",
      link: "https://rubycode-blog-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/RubyCode-Blog",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | Next Js",
      link: "https://alpha-agency-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    },
    {
      id: 5,
      title: "Jokes Project with Typescript",
      img: IMG5,
      description:
        "For when you need a fast funny joke, here are some short jokes to get anyone giggling.",
      technologies: "Html | Styled-components | Typescript",
      link: "https://jokes-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Joke-App",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Publications</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
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
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
