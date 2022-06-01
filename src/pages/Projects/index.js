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
            
            <div className='projects-container'>
            <h2 className="projects-title">Projets en cours</h2>

                <div className="projectsCard-container">
                    <Link className="projectsCard-link" to="/projets/sites-web">
                        <h3 className="projectsCard-link__title">Sites Web</h3>
                        <div className="projectsCard-img__container">
                            <img className="projectsCard-img" src={WebsitesImg} alt="Image sites web" />
                        </div>
                    </Link>
                </div>
                
                <div className="projectsCard-container">
                    <Link className="projectsCard-link" to="/projets/jeux">
                        <h3 className="projectsCard-link__title">Jeux</h3>
                        <div className="projectsCard-img__container">
                            <img className="projectsCard-img" src={GamesImg} alt="Image jeux" />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Projects;

// Ici on place le ProjectsCard qui contiendra Website et Games