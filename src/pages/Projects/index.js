/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from "react-router-dom";

import './projects.css';

import ProjetsImg from "../../assets/images/projets-img.jpg";
import WebsitesImg from "../../assets/images/sites-web.pe.jpg";
import GamesImg from "../../assets/images/jeux.pe.jpg";

const Projects = () => {

    return (
        <div className='projects'>
            
            <div className='projects-img__container'>
                <img className='projects-img' src={ProjetsImg} alt="Fond d'écran" />
            </div>
            
            <h2 className="projects-title">Projets en cours</h2>

            <div className='projectsCard-container'>

                <div className="projectsCard__websites-container">
                    <Link className="projectsCard__websites-link" to="/projets/sites-web">
                        <h3 className="projectsCard__websites-title">Sites Web</h3>

                        <div className="projectsCard__websites-imgContainer">
                            <img className="projectsCard__websites-img" src={WebsitesImg} alt="Image sites web" />
                        </div>

                    </Link>
                </div>
                
                <div className="projectsCard__games-container">
                    <Link className="projectsCard__games-link" to="/projets/jeux">
                        <h3 className="projectsCard__games-title">Jeux</h3>

                        <div className="projectsCard__games-imgContainer">
                            <img className="projectsCard__games-img" src={GamesImg} alt="Image jeux" />
                        </div>

                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Projects;

// Ici on place le ProjectsCard qui contiendra Website et Games.