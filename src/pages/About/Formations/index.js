
import { useSelector } from "react-redux";

import FormationsItems from "./FormationsItems";

import './formations.css';

const Formations = ({ open }) => {
    const curriculums = useSelector((state) => state.curriculum.data);

    let className = "formations";

	if (open) {
		className = "formations formations--open";
	}

    return (
        <div className={className}>
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