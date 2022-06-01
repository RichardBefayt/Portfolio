import WebSites from "../../WebSites";
import Games from "../../Games";

import './project-card.css';

const ProjectCard = () => {

    return (
        <div className='project-card'>
            <WebSites />
            <Games />
        </div>
    );
};



export default ProjectCard;