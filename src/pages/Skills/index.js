import { useSelector } from "react-redux";

import SkillsContainer from "./SkillsContainer";

// import CssLangage from './CssLangage';
// import GitLangage from './GitLangage';
// import HtmlLangage from './HtmlLanguage';
// import JavascriptLangage from './JavascriptLangage';
// import NodeLangage from './NodeLangage';
// import ReactLangage from './ReactLangage';
// import SqlLangage from './SqlLangage';

import './skills.css';

const Skills = () => {
    const skills = useSelector((state) => state.skills.allLanguage);

    return (
        <div className='skills'>
            <div className='skills-img__container'></div>

            <h1 className='skills-title'>Savoir-faire</h1>
            <p className='skills-intro'>Dans une liste non-exhaustive, sont regroupées ici des notions acquises durant ma formation ainsi que par la pratique personnelle. Elle sera complétée au fil du temps. Il ne s'agit en aucun cas d'un cours ni d'un tuto.</p>

            <div className="skills-container">
                <SkillsContainer skills={skills} />
                {/* <HtmlLangage />
                <CssLangage />
                <JavascriptLangage />
                <ReactLangage />
                <NodeLangage />
                <SqlLangage />
                <GitLangage /> */}
            </div>

        </div>
    );
}
export default Skills;