
import { useSelector, useDispatch } from "react-redux";

import FormationsItems from "./FormationsItems";

import './formations.css';

const Formations = () => {
    const curriculums = useSelector((state) => state.curriculum.data);

    const dispatch = useDispatch();
    const isClick = useSelector((state) => state.curriculum.isClick);

    return (
        <div 
            className={isClick ? "formations active" : "formations"}
            onClick={() => dispatch({ type: "TOGGLE_SETTINGS" })}
        >    
                <h2 className="formations-title">Formations et expériences professionnelles</h2>
                

                <div className='formations-container'>
            {
                curriculums.map(
                    (curriculum) => <FormationsItems key={curriculum.id} {...curriculum}
                />
            )}
                </div>
        </div>
    );
};
export default Formations;