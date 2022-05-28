import PropTypes from "prop-types";

import './formations-items.css';

const FormationsItems = ({ entitled, subtitle, duration, description, job, time, experience }) => (
    <div className='formations-items'>
        <h3 className='formations-entitled'>{entitled}</h3>
        <h4 className='formations-subtitle'>{subtitle}</h4>
        <p className='formations-duration'>Date de la formation : {duration}</p>
        <p className='formations-description'>Description de la formation : {description}</p>
        <p className='formations-job'>Métier exercé : {job}</p>
        <p className='formations-time'> Période : {time}</p>
        <p className='formations-experience'>Expérience dans ce domaine : {experience}</p>
    </div>
);

FormationsItems.propTypes = {
	entitled: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	job: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	experience: PropTypes.string.isRequired,
}

export default FormationsItems;