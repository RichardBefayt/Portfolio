import { useSelector, useDispatch } from "react-redux";

// import Elements from "./Elements";

import './skills-page.css';

const SkillsPage = () => {
    // const open = useSelector((state) => state.skills.open);

    const elements = useSelector((state) => state.skills.allLanguages.elements);
    console.log("elements :", elements);

    // skills.forEach((skill) => console.log(skill.elements));
    // const elements = skills.forEach((skill) => console.log(skill.elements));
    
    
    const dispatch = useDispatch();

    return (
        <div className='skills-page'>
            <button
                className='btn btn-light'
                onClick={() => dispatch({ type: 'TOGGLE_OPEN' })}
            >
                Title
                {/* {elements.name} */}
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