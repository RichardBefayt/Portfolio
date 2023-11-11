/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";

import './projects.css';

import { FaGithub, FaCheck, FaTimes } from "react-icons/fa";

import projectsData from "../../data/projectsData";

const Projects = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [isFlipped, setIsFlipped] = useState(Array(projectsData[selectedTab].composition.length).fill(false));

    useEffect(() => {
        if (clickedIndex !== null) {
            const timeoutId = setTimeout(() => {
                const newFlippedState = [...isFlipped];
                newFlippedState[clickedIndex] = false;
                setIsFlipped(newFlippedState);
                setClickedIndex(null);
            }, 2000); // ajustez la durée selon vos besoins
            return () => clearTimeout(timeoutId);
        }
    }, [clickedIndex, isFlipped]);

    const handleCardHover = (index) => {
        setHoveredIndex(index);
    };

    const handleCardLeave = () => {
        setHoveredIndex(null);
    };

    const handleCardClick = (index) => {
        const newFlippedState = [...isFlipped];
        newFlippedState[index] = !newFlippedState[index];
        setIsFlipped(newFlippedState);

        setClickedIndex(newFlippedState[index] ? index : null);
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
                    {projectsData[selectedTab].composition.map((item, index) => (
                        <div
                            className={`projects-card-details ${isFlipped[index] || hoveredIndex === index ? "flipped" : ""} ${clickedIndex === index ? "clicked" : ""}`}
                            key={index}
                            onMouseEnter={() => handleCardHover(index)}
                            onMouseLeave={handleCardLeave}
                            onClick={() => handleCardClick(index)}
                        >
                            {/* Recto - Image */}
                            <a href={item.slug} className="projects-link" target="_blank" rel="noreferrer">
                                <div className="projects-img-container">
                                    <div className={`projects-img ${isFlipped[index] || hoveredIndex === index ? "flipped" : ""}`}>
                                        <img
                                            className="projects-img-front"
                                            src={item.thumbnail}
                                            alt=""
                                        />
                                        <div className="projects-img-back">
                                            <div className="projects-text">
                                                <p className="projects-description">Objectif : {item.target}</p>
                                                <p className="projects-technos">Technos utilisées : {item.technos}</p>
                                                <div className="details-conditions">
                                                    <p className="projects-tuto">
                                                        Tutoriel : {item.tuto ? <FaCheck className="condition-icon check-icon" /> : <FaTimes className="condition-icon cross-icon" />}
                                                    </p>
                                                    <p className="projects-personal-project">
                                                        Projet personnel : {item.personalProject ? <FaCheck className="condition-icon check-icon" /> : <FaTimes className="condition-icon cross-icon" />}
                                                    </p>
                                                    <p className="projects-real-client">
                                                        Projet pour un client : {item.realClient ? <FaCheck className="condition-icon check-icon" /> : <FaTimes className="condition-icon cross-icon" />}
                                                    </p>
                                                </div>
                                                <a href={item.source} target="_blank" rel="noreferrer">Code source : <FaGithub className="social-link" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;