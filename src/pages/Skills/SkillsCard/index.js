import { useSelector, useDispatch } from "react-redux";

import './skills-card.css';

const SkillsCard = ({ elements }) => {
    const open = useSelector((state) => state.skills.open);
    
    const dispatch = useDispatch();

    return (
        <div className='skills-card'>
            <button
                className='btn btn-light'
                onClick={() => dispatch({ type: 'TOGGLE_OPEN' })}
            >
                {elements.name}
            </button>
            <div className={`${open ? 'snippets-content open' : 'snippets-content'}`}>
                <img
                    className='snippets-img'
                    src={elements.thumbnail}
                    alt={`Extraits codes HTML : ${elements.name}`}
                />
                <p className="snippets-description">{elements.description}</p>
            </div>
        </div>
    );
}
export default SkillsCard;