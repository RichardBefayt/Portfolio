/* eslint-disable jsx-a11y/img-redundant-alt */

import { useSelector } from "react-redux";

import FormationsItems from "./FormationsItems";

import './formations.css';

import formationsImg from "../../../assets/images/pages/about/formations-img.jpeg";

const Formations = ({ openFormations, setOpenFormations }) => {
    const curriculums = useSelector((state) => state.curriculum.data);

    return (
        <div className="formations">
            <div className="formations-header">
                <div className="formations-img-container">
                    <img className="formations-img" src={formationsImg} alt="Image CV" />
                </div>
                <button
                    className="btn btn-light"
                    onClick={() => setOpenFormations(openFormations)}
                >
                    X
                </button>
            </div>
            
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