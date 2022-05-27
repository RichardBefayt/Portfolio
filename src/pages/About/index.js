import { useState } from "react";
import { useSelector } from "react-redux";

import CurriculumItems from "../../components/CurriculumItems";

import './about.css';

import meImg from '../../assets/images/apropos-img.jpg';

const About = () => {
    const curriculums = useSelector((state) => state.curriculum.data);

    const [ clickOne, setClickOne ] = useState(false);
    const handleClickOne = () => setClickOne(!clickOne);
    
    const [ clickTwo, setClickTwo ] = useState(false);
    const handleClickTwo = () => setClickTwo(!clickTwo);

    const [ clickThree, setClickThree ] = useState(false);
    const handleClickThree= () => setClickThree(!clickThree);

    return (
        <div className='about'>
            <div className='about-left'>
                <img className='about-img' src={meImg} alt="" />
            </div>

            <div className='about-right'>
                <section className={clickOne ? "informations active" : "informations"} onClick={handleClickOne}>
                    
                    <h2 className='informations-title'>Informations</h2>
                    <h3 className='informations-subtitle'>Richard BEFAYT - Développeur Web Front-end</h3>
                    <p className='informations-contact'>06.35.02.11.58 - rbefayt@gmail.com</p>
                    <p className='informations-presentation'>Bonjour et bienvenue sur mon Portfolio. Passionné depuis toujours par la création, j'ai débuté ma carrière professionnelle par le cinéma. Aujourd'hui je me reconverti en tant que Développeur Web Front-End.</p>
                </section>

                <section className={clickTwo ? "formations active" : "formations"} onClick={handleClickTwo}>
                    
                    <h2 className='formations-title'>Formations et expériences professionnelles</h2>

                    <div className='formations-container'>
                {
                    curriculums.map(
                        (curriculum) => <CurriculumItems key={curriculum.id} {...curriculum}
                    />
                )}
            </div>
                </section>

                <section className={clickThree ? "personal active" : "personal"} onClick={handleClickThree}>
                    <h2 className='personal-title'>Loisirs et Passions</h2>
                    <p className='personal-item'>Moto</p>
                    <p className='personal-item'>Astronomie</p>
                    <p className='personal-item'>Jeux Vidéo</p>
                    <p className='personal-item'>Histoire</p>
                    <p className='personal-item'>Voyages</p>
                    <p className='personal-item'>Voyages</p>
                </section>
            </div>
        </div>
    );
};
export default About;