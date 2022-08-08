import { useSelector } from "react-redux";

import SkillsCards from "./SkillsCards";

import './skills.css';

const Skills = () => {

    const skills = useSelector((state) => state.skills.allLanguage);
    // console.log("skills :", skills);

    return (
        <div className='skills'>
            <div className='skills-img__container'></div>

            <h1 className='skills-title'>Savoir-faire</h1>
            <p className='skills-intro'>Dans une liste non-exhaustive, sont regroupées ici des notions acquises durant ma formation ainsi que par la pratique personnelle. Elle sera complétée au fil du temps. Il ne s'agit en aucun cas d'un cours ni d'un tuto.</p>

            <div className="skills-container">
                {
                    skills.map(
                        (skill) => <SkillsCards key={skill.id} {...skill} />
                    )
                }
            </div>

        </div>
    );
}
export default Skills;