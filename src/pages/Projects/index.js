import { useSelector } from "react-redux";

import ProjectCards from "../../components/ProjectCards";

import './projects.css';

import ProjetsImg from "../../assets/images/projets-img.jpg";

const Projects = () => {
    const projects = useSelector((state) => state.projects.data);

    return (
        <div className='projects'>
            <img className='projects-img' src={ProjetsImg} alt="Fond d'écran" />
            
            <div className='projects-heading'>
                <h2 className="heading-title">Projets en cours</h2>
            </div>

            <div className='projects-container'>
                {
                    projects.map(
                        (project) => <ProjectCards key={project.id} {...project}
                    />
                )}
            </div>
        </div>
    );
}

export default Projects;