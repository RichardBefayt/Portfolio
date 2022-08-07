import { useSelector, useDispatch } from "react-redux";

import './skills-card.css';

const SkillsCard = () => {
    const open = useSelector((state) => state.skills.open);

    const skills = useSelector((state) => state.skills.allLanguage);

    const dispatch = useDispatch();

    return (
        <div className='skills-card'>
            <button
                className='btn btn-light'
                onClick={() => dispatch({ type: 'TOGGLE_OPEN' })}
            >
                {skills.name}
            </button>
            <div className={`${open ? 'snippets-content open' : 'snippets-content'}`}>
                <img
                    className='snippets-img'
                    src={skills.thumbnail}
                    alt={`Extraits codes : ${skills.name}`}
                />
                <p className="snippets-description">{skills.description}</p>
            </div>
        </div>
    );
}
export default SkillsCard;