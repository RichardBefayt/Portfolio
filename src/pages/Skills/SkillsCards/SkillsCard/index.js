import { useSelector, useDispatch } from "react-redux";

import './skills-card.css';

const SkillsCard = ({ name, thumbnail, description }) => {
    const open = useSelector((state) => state.skills.open);
    
    const dispatch = useDispatch();

    return (
        <div className='skills-card'>
            <button
                className='btn btn-light'
                onClick={() => dispatch({ type: 'TOGGLE_OPEN' })}
            >
                {name}
            </button>
            <div className={`${open ? 'snippets-content open' : 'snippets-content'}`}>
                <img
                    className='snippets-img'
                    src={thumbnail}
                    alt={`Extraits codes HTML : ${name}`}
                />
                <p className="snippets-description">{description}</p>
            </div>
        </div>
    );
}
export default SkillsCard;