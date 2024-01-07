/* eslint-disable jsx-a11y/img-redundant-alt */

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

// import AboutItems from "./AboutItems";
import Informations from "./Informations";
// import Formations from "./Formations";
// import Personal from "./Personal";
import DownloadCV from "./DownloadCV";

import './about.css';

import { FaPenNib } from "react-icons/fa";

import imgProfile from "../../assets/images/pages/about/about-profil-img.jpeg";
// import imgJobs from "../../assets/images/pages/about/travail.jpg";
// import imgBike from "../../assets/images/pages/about/kawa.jpg";

const About = () => {
    const dispatch = useDispatch();
    const { cvData, open } = useSelector((state) => state.curriculum);

    const handleInformationsToggle = () => {
        dispatch({ type: "TOGGLE_SETTINGS" });
    };

    return (
        <div className='about'>
            <h1 className='about-title'>A Propos</h1>
            
            <div className="about-container">

                <div className="about-top">
                    <div className="about-left">
                        <div className="about-img-container">
                            <img src={imgProfile} alt="" />
                        </div>
                    </div>

                    <div className="about-right">
                        <div className="about-subtitles">
                            <h2>Richard BEFAYT</h2>
                            <h3>Développeur Web Front-End</h3>
                        </div>

                        <div className="about-presentation">
                            <p className="about-intro">
                                Bonjour et bienvenue sur mon Portfolio !
                            </p>

                            <p className="about-intro">
                                Passionné depuis toujours par la création, je me suis reconverti en tant que Développeur Web.
                            </p>
                            <p className="about-intro">
                                Grâce à une pratique quotidienne, j'ai pu acquérir de nouvelles compétences dans le domaine du Front-End.
                            </p>
                                
                            <p className="about-intro">    
                                Mon ambition est de devenir Fullstack.
                            </p>
                        </div>

                        <div className="about-btn">
                            <Link to="/contact">
                                <button className="btn">
                                    Contact <FaPenNib />
                                </button>
                            </Link>

                            <DownloadCV />
                        </div>
                    </div>
                </div>

                <div className="about-bottom">
                    <div className="about-boxes">

                        <div
                            className="about-box box-one"
                            onClick={handleInformationsToggle}
                        >
                            <h3
                                className={open ? 'title-open' : 'title-closed'}
                            >
                                {cvData.title}
                            </h3>
                            {open && (
                                cvData.details.map((detail, index) => (
                                    <Informations key={index} {...detail} isOpen={open} />
                                ))
                            )}
                        </div>

                        <div className="about-box box-two onClick={handleInformationsToggle}">
                            <h3>Formations</h3>
                        </div>

                        <div className="about-box box-three">
                            <h3>Technos</h3>
                        </div>
                        
                        <div className="about-box box-four">
                            <h3>Compétences</h3>
                        </div>

                        <div className="about-box box-five">
                            <h3>Loisirs</h3>
                        </div>
                        
                        {/* <div className="about-box box-six">
                            <h3>Loisirs</h3>
                        </div> */}

                    </div>
                    
                </div>

            </div>
            
        </div>
    );
};
export default About;