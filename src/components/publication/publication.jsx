import React, { useEffect, useState } from "react";
import axios from "axios";
import "./publication.css";
import publicationImage from "../../assets/publication.jpg";
import publicationLinks from "../../assets/..";

const Publication = () => {
  const [publications, setPublications] = useState([]);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/publication/getAllPublications");
        setPublications(response.data);
      } catch (error) {
        console.error("Error fetching publications:", error);
      }
    };

    fetchPublications();
  }, []);

  console.log(Publication);

  return (
    <section id="publication">
      <h5>My Recent Work</h5>
      <h2>Publications</h2>

      <div className="container publication__container">
        {publications.map((publication) => (
          <article className="publication__item" key={publication.id}>
            <div className="publication__item-image">
              <img src={publicationImage} alt={publication.title} />
            </div>
            <div className="publication__item-content">
              <h3>{publication.title}</h3>
              <p>{publication.description}</p>
            </div>
            <div className="publication__item-cta">
              <a
                href={publication.github}
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

export default Publication;
