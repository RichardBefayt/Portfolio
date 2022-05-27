import PropTypes from "prop-types";

import './curriculum-items.css';

const CurriculumItems = ({ entitled, subtitle, duration, description, job, time, experience }) => (
    <div className='curriculum-items'>
        <h3 className='formations-entitled'>{entitled}</h3>
        <h4 className='formations-subtitle'>{subtitle}</h4>
        <h4 className='formations-duration'>{duration}</h4>
        <p className='formations-description'>{description}</p>
        
        <h4 className='formations-job'>{job}</h4>
        <h4 className='formations-time'>{time}</h4>
        <p className='formations-experience'>{experience}</p>
    </div>
);

CurriculumItems.propTypes = {
	entitled: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	duration: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	job: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	experience: PropTypes.string.isRequired,
}

export default CurriculumItems;