/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

import './application-card.css';

const ApplicationCard = ({ subtitle, slug, introduction, thumbnail, technos }) => (
    <div className='application-card'>
        <h2 className="application-card__subtitle">{subtitle}</h2>
        <a href={`${slug}`} className="application-card__link" target="_blank" rel="noreferrer">
            <div className="application-card__img-container">
                <img className='application-card__img' src={thumbnail} alt={subtitle} />
            </div>
        </a>
        <p className="application-card__description">{technos}</p>
    </div>
);

ApplicationCard.propTypes = {
	subtitle: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}

export default ApplicationCard;