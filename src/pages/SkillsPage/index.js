import { useSelector, useDispatch } from "react-redux";

import Elements from "./Elements";

import './skills-page.css';

const SkillsPage = () => {
    const open = useSelector((state) => state.skills.open);

    const elements = useSelector((state) => state.skills.allLanguage.elements);
    console.log("elements :", elements);
    
    const dispatch = useDispatch();

    return (
        <div className='skills-page'>
            <button
                className='btn btn-light'
                onClick={() => dispatch({ type: 'TOGGLE_OPEN' })}
            >
                {elements.name}
            </button>
            <div className={`${open ? 'snippets-content open' : 'snippets-content'}`}>
                {
                    elements.map(
                        (element) => <Elements key={element.id} {...element} />
                    )
                }
            </div>
        </div>
    );
}
export default SkillsPage;