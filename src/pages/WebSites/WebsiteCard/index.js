/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

import './website-card.css';

const WebsiteCard = ({ subtitle, slug, thumbnail, description }) => {
    return (
        <div className='website-card'>
            <a href={slug} className="website-card__link" target="_blank" rel="noreferrer">
                <h2 className="website-card__subtitle">{subtitle}</h2>
                <div className="website-card__img-container">
                    <img className='website-card__img' src={thumbnail} alt={subtitle} />
                </div>
            </a>
            <p className="website-card__description">{description}</p>
        </div>
    );
}

WebsiteCard.propTypes = {
	subtitle: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default WebsiteCard;