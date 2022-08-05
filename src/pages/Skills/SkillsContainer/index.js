// import { Link } from 'react-router-dom';
import SkillsCard from "../SkillsCard";

import './skills-container.css';

const SkillsContainer = ({ skills }) => {

    return (
        <div className='skills-container'>

            {/* <Link className="skills-link" to={`/savoir-faire/${allLanguage.slug}`}> */}
                <h3 className="language-title">{skills.title}</h3>

                <p className="language-definition">{skills.definition}</p>

                <div className="language-img-card">
                    <img className="language-img" src={skills.picture} alt={skills.title} />
                </div>

                <div className="skills-cards">
                    {skills.map(
                        (skill) => <SkillsCard elements={skill.elements} />
                    )}
                </div>
            {/* </Link> */}

        </div>
    );
}
export default SkillsContainer;