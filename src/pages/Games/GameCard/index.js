/* eslint-disable jsx-a11y/alt-text */
import PropTypes from "prop-types";

import './game-card.css';

const GameCard = ({ subtitle, slug, thumbnail, description }) => (
    <div className='game-card'>
        <h2 className="game-card__subtitle">{subtitle}</h2>
        {/* <img className='game-card__img'>{thumbnail}</img> */}
        <p className="game-card__description">{description}</p>
    </div>
);

GameCard.propTypes = {
	subtitle: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}
export default GameCard;