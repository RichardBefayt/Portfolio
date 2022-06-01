
import { useSelector } from "react-redux";

import FormationsItems from "./FormationsItems";

import './formations.css';

const Formations = () => {
    const curriculums = useSelector((state) => state.curriculum.data);

    return (
        <div className="formations">
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