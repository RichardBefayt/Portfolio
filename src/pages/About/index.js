/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import CurriculumItems from "../../components/CurriculumItems";

import './about.css';

import meImg from '../../assets/images/apropos-img.jpg';

const About = () => {
    const curriculums = useSelector((state) => state.curriculum.data);

    const dispatch = useDispatch();
    const isClick = useSelector((state) => state.curriculum.isClick)

    

    return (
        <div className='about'>
            <div className='about-left'>
                <img className='about-img' src={meImg} alt="Photo de profil" />
            </div>

            <div className='about-right'>
                <section
                    className={isClick ? "informations active" : "informations"}
                    onClick={() => dispatch({ type: "TOGGLE_SETTINGS" })}
                >

                    <h2 className="informations-title">Informations</h2>
                    <h3 className='informations-subtitle'>Richard BEFAYT - Développeur Web Front-end</h3>
                    <p className='informations-contact'>06.35.02.11.58 - rbefayt@gmail.com</p>
                    <p className='informations-presentation'>Bonjour et bienvenue sur mon Portfolio. Passionné depuis toujours par la création, j'ai débuté ma carrière professionnelle par le cinéma. Aujourd'hui je me reconverti en tant que Développeur Web Front-End.</p>
                </section>

                <section
                    className={isClick ? "formations active" : "formations"}
                    onClick={() => dispatch({ type: "TOGGLE_SETTINGS" })}
                >    
                    <h2 className="formations-title">Formations et expériences professionnelles</h2>
                    

                    <div className='formations-container'>
                {
                    curriculums.map(
                        (curriculum) => <CurriculumItems key={curriculum.id} {...curriculum}
                    />
                )}
            </div>
                </section>

                <section
                    className={isClick ? "personal active" : "personal"}
                    onClick={() => dispatch({ type: "TOGGLE_SETTINGS" })}
                >
                    <h2 className="personal-title">Loisirs et Passions</h2>
                    
                    <ul className='personal-list'>
                        <li className='personal-item'>Jeux Vidéo</li>
                        <li className='personal-item'>Moto</li>
                        <li className='personal-item'>Astronomie</li>
                        <li className='personal-item'>Histoire</li>
                        <li className='personal-item'>Voyages</li>
                        <li className='personal-item'>Airsoft</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};
export default About;