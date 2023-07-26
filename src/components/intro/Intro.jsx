import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.png'

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Kalyani Selvarajah" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1.5 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Publications</h5>
              <small>10+ Completed Publications</small>
            </article>
          </div>
          <p>
          I am an assistant professor of Computer Science at the University of Windsor. 
          I received Ph.D. from the University of Windsor in computer Science under the supervision of Dr. Ziad Kobti and Dr. Mehdi Kargar. 
          Much of my research has been on improving the understanding, design, and performance of social network analysis, mainly through evolutionary algorithms and deep learning techniques.
          In my Ph.D. thesis, I investigated the promising challenges with team formation problems and prediction problems in social networks. In addition, I have published several peer-reviewed journals and conference articles, including IJCNN, ECAI, ICCS, and Expert Systems with Applications. I also have collaborated actively with researchers in other disciplines, particularly the nursing department, and mentored M.Sc. thesis students, MAC, and undergraduate students. Currently, my research focuses on knowledge graph completion and extends to machine learning and data mining for large interconnected systems.
          I received B.Sc. and M.Sc. in computer science degrees from the University of Peradeniya, Sri Lanka.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
