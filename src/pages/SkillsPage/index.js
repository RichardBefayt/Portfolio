import { useSelector, useDispatch } from "react-redux";

// import Elements from "./Elements";

import './skills-page.css';

const SkillsPage = () => {
    // const open = useSelector((state) => state.skills.open);

    const skills = useSelector((state) => state.skills.allLanguages);
    console.log("skills :", skills);

    // skills.forEach((skill) => console.log(skill.elements));
    // const elements = skills.forEach((skill) => console.log(skill.elements));
    
    const index = skills.forEach((skill) => skill.elements);
    
    const dispatch = useDispatch();

    return (
        <div className='skills-page'>
            <button
                className='btn btn-light'
                onClick={() => dispatch({ type: 'TOGGLE_OPEN' })}
            >
                {/* Title */}
                {skills[index].elements[1]}
            </button>
            {/* <div className={`${open ? 'snippets-content open' : 'snippets-content'}`}>
                {
                    elements.map(
                        (skill) => <Elements key={skill.id} {...skill} />
                    )
                }
            </div> */}
        </div>
    );
}
export default SkillsPage;