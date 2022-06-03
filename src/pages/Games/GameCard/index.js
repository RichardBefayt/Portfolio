/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

import './game-card.css';

const GameCard = ({ subtitle, slug, thumbnail, description }) => (
    <div className='game-card'>
        <Link to={`/projets/jeux/${slug}`} className="game-card__link">
            <h2 className="game-card__subtitle">{subtitle}</h2>
            <img className='game-card__img' src={thumbnail} alt={subtitle} />
        </Link>
        <p className="game-card__description">{description}</p>
    </div>
);

GameCard.propTypes = {
	subtitle: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}
export default GameCard;