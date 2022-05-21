import './projects.css';

import ProjetsImg from "../../assets/images/projets-img.jpg";

const Projects = () => (
    <div className='projects'>
        <div className='projects-background'>
            <img className='projects-img' src={ProjetsImg} alt="Fond d'écran" />
            
            <div className='projects-heading'>
                <h2 className="heading-title">Projets</h2>
                <p className="heading-text">En cours</p>
            </div>
        </div>

    </div>
);

export default Projects;