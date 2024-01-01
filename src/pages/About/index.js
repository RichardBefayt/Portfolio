/* eslint-disable jsx-a11y/img-redundant-alt */
// import { useState } from "react";
import { Link } from "react-router-dom";

// import Informations from "./Informations";
// import Formations from "./Formations";
// import Personal from "./Personal";

import './about.css';

import { FaPenNib , FaDownload } from "react-icons/fa";

import imgProfile from "../../assets/images/pages/about/about-profil-img.jpeg";
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
                        <div className="about-empty-box"></div>
                        <div className="about-img-container">
                            <img src={imgProfile} alt="" />
                        </div>
                    </div>

                    <div className="about-right">
                        <h2>Richard BEFAYT</h2>
                        <h3>Développeur Web Front-End</h3>

                        <p className="about-intro">
                            Bonjour et bienvenue sur mon Portfolio !
                        </p>

                        <p className="about-intro">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus earum aut quis ratione molestias ea voluptas ipsam dicta ducimus similique..
                        </p>
                        <p className="about-intro">
                            Grâce à une pratique quotidienne, mon ambition est d'acquérir sans cesse de nouvelles compétences pour atteindre un niveau satisfaisant en tant que Développeur Web Front-End. <br /> Par la suite, j'aimerai développer celles du Back, dans le but de devenir Fullstack.
                        </p>

                        <div className="about-btn">
                            <Link to="/contact">
                                <button className="btn">
                                    Contact <FaPenNib />
                                </button>

                            </Link>

                            <Link to="/">
                                <button className="btn btn-light">
                                    CV <FaDownload />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="about-bottom">
                    <div className="about-boxes">
                        <div className="about-box box-one"></div>
                        <div className="about-box box-two"></div>
                        <div className="about-box box-three"></div>
                        <div className="about-box box-four"></div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};
export default About;