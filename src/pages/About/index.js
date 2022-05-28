/* eslint-disable jsx-a11y/img-redundant-alt */
import { useSelector, useDispatch } from "react-redux";

import FormationsItems from "../../components/FormationsItems";

import './about.css';

import meImg from '../../assets/images/apropos-img.jpg';

import { CgGames } from "react-icons/cg";
import { MdDirectionsBike, MdHistoryEdu } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa";
import { SiYourtraveldottv } from "react-icons/si";

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
                        (curriculum) => <FormationsItems key={curriculum.id} {...curriculum}
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
                        <li className='personal-item'>
                            <CgGames size={30} style={{color: "#000", marginRight: "0.6rem" }} />
                            Jeux Vidéo
                        </li>

                        <li className='personal-item'>
                            <MdDirectionsBike size={30} style={{color: "#000", marginRight: "0.6rem" }} />
                            Moto
                        </li>
                        <li className='personal-item'>
                            <SiYourtraveldottv size={30} style={{color: "#000", marginRight: "0.6rem" }} />
                            Voyages
                        </li>
                        <li className='personal-item'>
                            <FaUserAstronaut size={30} style={{color: "#000", marginRight: "0.6rem" }} />
                            Astronomie
                        </li>
                        <li className='personal-item'>
                            <MdHistoryEdu size={30} style={{color: "#000", marginRight: "0.6rem" }} />
                            Histoire
                        </li>
                    </ul>
                </section>
                
            </div>
        </div>
    );
};
export default About;