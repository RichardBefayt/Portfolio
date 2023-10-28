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
    const [selectedTab, setSelectedTab] = useState(0);
    // console.log(projectsData);
    console.log(selectedTab);
    return (
        <div className='projects'>
            <h2 className="projects-title">PROJETS</h2>
            <div className="projects-container">
                {/* Remarque : pour utiliser `index`, obligé d'ajouter obj en paramètre */}
                {projectsData.map((obj, index) => (
                    <button
                        className="projects-category-title"
                        key={index}
                        onClick={() => setSelectedTab(index)}
                    >
                        {projectsData[index].title}
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
}

export default Projects;