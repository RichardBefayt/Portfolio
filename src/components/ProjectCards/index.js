import PropTypes from "prop-types";

import './project-cards.css';

const ProjectCards = ({ title, introduction, subtitle, thumbnail, description,  }) => {

    return (
        <div className='project-cards'>
            <div className='project-cards__container'>
                <h3 className="project-cards__title">{title}</h3>
				<p className="project-cards__intro">{introduction}</p>

                <div className="project-cards__details">
                    <h4 className="project-cards__subtitle">{subtitle}</h4>
                    <img className="project-cards__img" src={thumbnail} alt="Vignette" />
                    <p className="project-cards__description">{description}</p>
                </div>
            </div>
        </div>
    );
};

ProjectCards.propTypes = {
	title: PropTypes.string.isRequired,
	introduction: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default ProjectCards;