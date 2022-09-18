import { Link } from 'react-router-dom';

import './skills-cards.css';

const SkillsCards = ({ slug, title, definition, picture }) => {

    return (
        <div className='skills-cards'>
            {/* <Link className="skills-cards-link" to={`/snippets/${slug}`}> */}
            <Link to='/en-construction' className="skills-cards-link">

                <div className="skills-cards-img-container">
                    <img className="skills-cards-img" src={picture} alt={title} />
                </div>
                <h3 className="skills-cards-title">{title}</h3>

                    <p className="skills-cards-definition">{definition}</p>
            </Link>
        </div>
    );
}
    
export default SkillsCards;