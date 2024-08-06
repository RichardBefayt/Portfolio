import { useSelector, useDispatch } from "react-redux";

import Informations from '../Informations';
import Formations from '../Formations';
import HardSkills from '../HardSkills';
import SoftSkills from '../SoftSkills';
import Personal from '../Personal';

import './about-boxes.css';

const AboutBoxes = () => {
    const dispatch = useDispatch();
    const { cvData, open } = useSelector((state) => state.curriculum);

    const handleInformationsToggle = () => {
        dispatch({ type: "TOGGLE_SETTINGS" });
    };   
    return (
        <div className='about-boxes'>
            <Informations />
            <Formations />
            <HardSkills />
            <SoftSkills />
            <Personal />
        </div>
    );
}

export default AboutBoxes;