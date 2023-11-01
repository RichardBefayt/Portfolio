/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
// import { Link } from "react-router-dom";

import './projects.css';

import { FaGithub } from "react-icons/fa";

import projectsData from "../../data/projectsData";

// import WebsitesImg from "../../assets/images/websites/sites-web.pe.jpg";
// import GamesImg from "../../assets/images/games/jeux.pe.jpg";

const Projects = () => {
    // Utilisez useState pour suivre l'indice de l'onglet actuellement sélectionné
    const [selectedTab, setSelectedTab] = useState(0);
  
    return (
        <div className="projects">
            <h2 className="projects-title">PROJETS</h2>
            <div className="projects-container">
                {projectsData.map((project, index) => (
                    <button
                        className={`projects-category-title ${
                            index === selectedTab ? "selected" : ""
                        }`}
                        key={index}
                        onClick={() => setSelectedTab(index)}
                    >
                        {project.title}
                    </button>
                ))}
            </div>
            <div className="projects-content">
                <div className="projects-card">
                    {projectsData[selectedTab].composition.map((item, index) => (
                        <div className="projects-card-details" key={index}>
                            <h3 className="projects-subtitle">{item.subtitle}</h3>
                            <a href={item.slug} className="projects-link" target="_blank" rel="noreferrer">
                                <div className="projects-img-container">
                                    <img className="projects-img" src={item.thumbnail} alt="" />
                                </div>
                            </a>
                            <p className="projects-description">Objectif : {item.description}</p>
                            <p className="projects-technos">Technos utilisées : {item.technos}</p>
                            <a href={item.target} target="_blank" rel="noreferrer">Code source : <FaGithub className="social-link" /></a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
  
  export default Projects;