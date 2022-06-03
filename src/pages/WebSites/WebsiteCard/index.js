/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

import './website-card.css';

const WebsiteCard = ({ subtitle, slug, thumbnail, description }) => {
    console.log("thumbnail", thumbnail);    
    return (
        <div className='website-card'>
            <Link to={`/projets/sites-web/${slug}`} className="website-card__link">
                <h2 className="website-card__subtitle">{subtitle}</h2>
                <img className='website-card__img' src={thumbnail} alt={subtitle} />
            </Link>
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