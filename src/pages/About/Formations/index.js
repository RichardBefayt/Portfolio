
import { useSelector } from "react-redux";

import FormationsItems from "./FormationsItems";

import './formations.css';

const Formations = ({ openFormations, setOpenFormations }) => {
    const curriculums = useSelector((state) => state.curriculum.data);

    return (
        <div className="formations">
            <button
                className="btn btn-light"
                onClick={() => setOpenFormations(openFormations)}
            >
                X
            </button>
            
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