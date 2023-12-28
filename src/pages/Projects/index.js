/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";

import './projects.css';

import { FaGithub, FaCheck, FaTimes, FaInfo, FaGlobe } from "react-icons/fa";

import projectsData from "../../data/projectsData";

const Projects = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [isFlipped, setIsFlipped] = useState(Array(projectsData[selectedTab].composition.length).fill(false));
    
    const handleCardClick = (index) => {
        const newFlippedState = [...isFlipped];
        newFlippedState[index] = !newFlippedState[index];
        setIsFlipped(newFlippedState);
    
        setClickedIndex(clickedIndex === index ? null : index);
    };

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
                    {projectsData[selectedTab].composition.length === 0 ? (
                        <p className="projects-card-empty">🔧 En cours de création 🔨</p>) : (
                            projectsData[selectedTab].composition.map((item, index) => (
                                <div
                                    className={`projects-card-details ${isFlipped[index] ? "flipped" : ""} ${clickedIndex === index ? "clicked" : ""}`}
                                    key={index}
                                >
                                    <h2>{item.subtitle}</h2>

                                    {/* Recto */}
                                    <div className="projects-img-container">
                                        <div className={`projects-img ${isFlipped[index] || hoveredIndex === index ? "flipped" : ""}`} onClick={() => handleCardClick(index)}>
                                            <img
                                                className="projects-img-front"
                                                src={item.thumbnail}
                                                alt=""
                                            />
                                            {/* Verso */}
                                            <div className="projects-img-back">
                                                <div className="projects-text">
                                                    <p className="projects-description">Objectif : {item.target}</p>
                                                    <p className="projects-technos">Technos utilisées : {item.technos}</p>
                                                    <div className="details-conditions">
                                                        <p className="projects-tuto">
                                                            Tutoriel : {item.tuto ? <FaCheck className="condition-icon check-icon" /> : <FaTimes className="condition-icon cross-icon" />}
                                                        </p>
                                                        <p className="projects-personal-project">
                                                            Création personnelle : {item.personalProject ? <FaCheck className="condition-icon check-icon" /> : <FaTimes className="condition-icon cross-icon" />}
                                                        </p>
                                                        <p className="projects-real-client">
                                                            Projet pour un client : {item.realClient ? <FaCheck className="condition-icon check-icon" /> : <FaTimes className="condition-icon cross-icon" />}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="projects-cards-btn">
                                        <button onClick={() => handleCardClick(index)} className="btn-projects-more">
                                            <FaInfo />
                                        </button>
                                        <button onClick={() => handleCardClick(index)} className="btn-projects-link">
                                            <a href={item.slug} className="projects-link" target="_blank" rel="noreferrer">
                                                <FaGlobe />
                                            </a>
                                        </button>
                                        <button onClick={() => handleCardClick(index)} className="btn-projects-social-link">
                                            <a href={item.source} target="_blank" rel="noreferrer">
                                                <FaGithub />
                                            </a>
                                        </button>
                                    </div>

                                </div>
                            ))   
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;