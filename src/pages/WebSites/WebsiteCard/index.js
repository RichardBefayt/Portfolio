/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

// import { Link } from 'react-router-dom';

import { FaGithub } from "react-icons/fa";

import './website-card.css';

const WebsiteCard = ({ subtitle, slug, thumbnail, description, technos, target }) => {
    return (
        <div className='website-card'>
            <a href={slug} className="website-card__link" target="_blank" rel="noreferrer">
            {/* <Link to='/en-construction' className="game-card__link"> */}

            
                <h2 className="website-card__subtitle">{subtitle}</h2>
                <div className="website-card__img-container">
                    <img className='website-card__img' src={thumbnail} alt={subtitle} />
                </div>
            {/* </Link> */}
            </a>
            <p className="website-card__description">{description}</p>
            <p className="website-card__technos">{technos}</p>
            <a href={target} target="_blank" rel="noreferrer"><FaGithub className="social-link" /></a>
        </div>
    );
}

WebsiteCard.propTypes = {
	subtitle: PropTypes.string.isRequired,
    // slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	technos: PropTypes.string.isRequired,
	target: PropTypes.string.isRequired,
}

export default WebsiteCard;