/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

// import { Link } from 'react-router-dom';

import { FaGithub, FaGlobe } from "react-icons/fa";

import './website-card.css';

const WebsiteCard = ({ subtitle, slug, thumbnail, description, technos, source }) => {
    return (
        <div className='website-card'>
            
            <div className='website-card__container'>

                <div className="website-card__header">
                    <h2 className="website-card__subtitle">{subtitle}</h2>
                    
                    <div className="website-card__img-container">
                        <a href={`${slug}`} className="website-card__link" target="_blank" rel="noreferrer">
                            <img className='website-card__img' src={thumbnail} alt={subtitle} />
                        </a>
                    </div>
                </div>

                <div className="website-card__center">
                    <p className="website-card__description">🎯: {description}</p>
                    <p className="website-card__technos">💻: {technos}</p>
                </div>

                <div className="website-card__footer">
                    <div className="website-card__links">
                        <button className="website-card__links-project">
                            <a href={slug} className="projects-link" target="_blank" rel="noreferrer">
                                <FaGlobe />
                            </a>
                        </button>
                        <button className="website-card__links-social">
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

WebsiteCard.propTypes = {
	subtitle: PropTypes.string.isRequired,
    // slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	technos: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
}

export default WebsiteCard;