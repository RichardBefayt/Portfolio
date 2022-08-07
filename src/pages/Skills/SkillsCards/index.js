import { Link } from 'react-router-dom';

import './skills-cards.css';

const SkillsCards = ({ slug, title, definition, picture }) => {

    return (
        <div className='skills-cards'>
            <Link className="skills-cards-link" to={`/savoir-faire/${slug}`}>

                <h3 className="skills-cards-title">{title}</h3>

                <p className="skills-cards-definition">{definition}</p>

                <div className="skills-cards-img-container">
                    <img className="skills-cards-img" src={picture} alt={title} />
                </div>
            </Link>
        </div>
    );
}
    
export default SkillsCards;