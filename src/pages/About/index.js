/* eslint-disable jsx-a11y/img-redundant-alt */
import { useSelector, useDispatch } from "react-redux";

import Informations from "./Informations";
import Formations from "./Formations";
import Personal from "./Personal";

import './about.css';

import meImg from '../../assets/images/apropos-img.jpg';

const About = () => {
    const open = useSelector((state) => state.curriculum.open);

    const dispatch = useDispatch();

    const toggle = () => {
        dispatch({ type: "TOGGLE_SETTINGS" })
    }

    return (
        <div className='about'>
            <div className='about-left'>
                <img className='about-img' src={meImg} alt="Photo de profil" />
            </div>

            <div className='about-right'>
                <button
                    type="button"
                    className="informations-btn"
                    onClick={toggle}
                >
                    Informations
                </button>
                    { open && <Informations open={open} />}
                
                <button
                    type="button"
                    className="formations-btn"
                    onClick={toggle}
                >
                    Formations et expériences professionnelles
                </button>
                { open && <Formations open={open} />}
                
                <button
                    type="button"
                    className="personal-btn"
                    onClick={toggle}
                >
                    Loisirs et Passions 
                </button>
                { open && <Personal open={open} />}
            </div>
        </div>
    );
};
export default About;