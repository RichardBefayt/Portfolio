/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

import './project-card.css';

const ProjectCard = ({ subtitle, slug, thumbnail, description }) => {

    return (
        <div className='project-card'>
            <Link to={`/projets/sites-web/${slug}`} className="project-card__link">
                <h2 className="project-card__subtitle">{subtitle}</h2>
                <div className="project-card__img-container">
                    <img className='project-card__img' src={thumbnail} alt={subtitle} />
                </div>
            </Link>
            <p className="project-card__description">{description}</p>
        </div>
    );
};

ProjectCard.propTypes = {
	subtitle: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default ProjectCard;