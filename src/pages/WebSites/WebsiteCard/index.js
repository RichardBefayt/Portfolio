/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

import { FaGithub } from "react-icons/fa";

import './website-card.css';

const WebsiteCard = ({ subtitle, slug, thumbnail, description, target }) => {
    return (
        <div className='website-card'>
            <a href={slug} className="website-card__link" target="_blank" rel="noreferrer">
                <h2 className="website-card__subtitle">{subtitle}</h2>
                <div className="website-card__img-container">
                    <img className='website-card__img' src={thumbnail} alt={subtitle} />
                </div>
            </a>
            <p className="website-card__description">{description}</p>
            <a href={target} target="_blank" rel="noreferrer"><FaGithub className="social-link" /></a>
        </div>
    );
}

WebsiteCard.propTypes = {
	subtitle: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	target: PropTypes.string.isRequired,
}

export default WebsiteCard;