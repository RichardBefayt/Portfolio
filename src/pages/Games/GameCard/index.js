/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

// import { Link } from 'react-router-dom';

import { FaGithub, FaGlobe } from "react-icons/fa";

import './game-card.css';

const GameCard = ({ subtitle, slug, thumbnail, description, technos, source }) => {
    return (
        <div className='game-card'>
            
            <div className='game-card__container'>

                <div className="game-card__header">
                    <h2 className="game-card__subtitle">{subtitle}</h2>
                    
                    <div className="game-card__img-container">
                        <a href={`${slug}`} className="game-card__link" target="_blank" rel="noreferrer">
                            <img className='game-card__img' src={thumbnail} alt={subtitle} />
                        </a>
                    </div>
                </div>

                <div className="game-card__center">
                    <p className="game-card__description">🎯: {description}</p>
                    <p className="game-card__technos">💻: {technos}</p>
                </div>

                <div className="game-card__footer">
                    <div className="game-card__links">
                        <button className="game-card__links-project">
                            <a href={slug} className="projects-link" target="_blank" rel="noreferrer">
                                <FaGlobe />
                            </a>
                        </button>
                        <button className="game-card__links-social">
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

GameCard.propTypes = {
	subtitle: PropTypes.string.isRequired,
    // slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	technos: PropTypes.string.isRequired,
	source: PropTypes.string.isRequired,
}

export default GameCard;