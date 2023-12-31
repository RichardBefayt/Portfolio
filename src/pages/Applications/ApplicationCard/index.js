/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

// import { Link } from 'react-router-dom';

import { FaGithub, FaGlobe } from "react-icons/fa";

import './application-card.css';

const ApplicationCard = ({ subtitle, slug, thumbnail, description, technos, source }) => {
    return (
        <div className='application-card'>
            
            <div className='application-card__container'>

                <div className="application-card__header">
                    <h2 className="application-card__subtitle">{subtitle}</h2>
                    
                    <div className="application-card__img-container">
                        <a href={`${slug}`} className="application-card__link" target="_blank" rel="noreferrer">
                            <img className='application-card__img' src={thumbnail} alt={subtitle} />
                        </a>
                    </div>
                </div>

                <div className="application-card__center">
                    <p className="application-card__description">🎯: {description}</p>
                    <p className="application-card__technos">💻: {technos}</p>
                </div>

                <div className="application-card__footer">
                    <div className="application-card__links">
                        <button className="application-card__links-project">
                            <a href={slug} className="projects-link" target="_blank" rel="noreferrer">
                                <FaGlobe />
                            </a>
                        </button>
                        <button className="application-card__links-social">
                            <a href={source} target="_blank" rel="noreferrer">
                                <FaGithub />
                            </a>
                        </button>
                    </div>
                </div>

            </div>

        </div>
    );
}

ApplicationCard.propTypes = {
	subtitle: PropTypes.string.isRequired,
    // slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	technos: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
}

export default ApplicationCard;