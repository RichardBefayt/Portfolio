/* eslint-disable jsx-a11y/img-redundant-alt */
// import { useState } from "react";
import { Link } from "react-router-dom";

// import Informations from "./Informations";
// import Formations from "./Formations";
// import Personal from "./Personal";

import './about.css';

import { FaPenNib } from "react-icons/fa";

import imgProfile from "../../assets/images/pages/about/about-profil-img.jpeg";
import DownloadCV from "./DownloadCV";
// import imgJobs from "../../assets/images/pages/about/travail.jpg";
// import imgBike from "../../assets/images/pages/about/kawa.jpg";

const About = () => {
    // const [openInfos, setOpenInfos] = useState(false);
    // const [openFormations, setOpenFormations] = useState(false);
    // const [openPersonal, setOpenPersonal] = useState(false);

    return (
        <div className='about'>
            <h1 className='about-title'>A Propos</h1>
            
            <div className="about-container">

                <div className="about-top">
                    <div className="about-left">
                        <div className="about-img-container">
                            <div className="img-border">
                                <img src={imgProfile} alt="" />
                            </div>
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
                                Passionné depuis toujours par la création, je me suis reconvertis en tant que Développeur Web.
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
                        <div className="about-box box-one">
                            <h3>Informations</h3>
                        </div>
                        <div className="about-box box-two">
                            <h3>Formations</h3>
                        </div>
                        <div className="about-box box-three">
                            <h3>Compétences</h3>
                        </div>
                        <div className="about-box box-four">
                            <h3>Loisirs</h3>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};
export default About;