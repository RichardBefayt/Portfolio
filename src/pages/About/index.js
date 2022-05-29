/* eslint-disable jsx-a11y/img-redundant-alt */

import Informations from "./Informations";
import Formations from "./Formations";
import Personal from "./Personal";

import './about.css';

import meImg from '../../assets/images/apropos-img.jpg';

const About = () => {
    return (
        <div className='about'>
            <div className='about-left'>
                <img className='about-img' src={meImg} alt="Photo de profil" />
            </div>

            <div className='about-right'>
                <Informations />
                <Formations />
                <Personal />
                
            </div>
        </div>
    );
};
export default About;