/* eslint-disable jsx-a11y/img-redundant-alt */



import { Link } from "react-router-dom";

import AboutBoxes from "./AboutBoxes";
// import AboutItems from "./AboutItems";
// import Informations from "./Informations";
// import Formations from "./Formations";
// import HardSkills from "./HardSkills";
// import SoftSkills from "./SoftSkills";
// import Personal from "./Personal";
import DownloadCV from "./DownloadCV";

import './about.css';

import { FaPenNib } from "react-icons/fa";

import imgProfile from "../../assets/images/pages/about/about-profil-img.jpeg";
// import imgJobs from "../../assets/images/pages/about/travail.jpg";
// import imgBike from "../../assets/images/pages/about/kawa.jpg";

const About = () => {
    

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
                    <AboutBoxes />
                    
                    {/* <div className="about-boxes">

                        <div
                            className="about-box box-one"
                            onClick={handleInformationsToggle}
                        >
                            <h3
                                className={open ? 'title-open' : 'title-closed'}
                            >
                                {cvData[0].title}
                            </h3>
                            {open && (
                                cvData.map((item) => (
                                    item.details.map((detail, index) => (
                                        <Informations key={index} {...detail} isOpen={open} />
                                    ))
                                ))
                            )}
                        </div>

                        <div className="about-box box-two">
                            <h3>{cvData[1].title}</h3>
                            {open && (
                                cvData.map((item) => (
                                    item.details.map((detail, index) => (
                                        <Formations key={index} {...detail} isOpen={open} />
                                    ))
                                ))
                            )}
                        </div>

                        <div className="about-box box-three">
                            <h3>{cvData[2].title}</h3>
                            {open && (
                                cvData.map((item) => (
                                    item.details.map((detail, index) => (
                                        <HardSkills key={index} {...detail} isOpen={open} />
                                    ))
                                ))
                            )}
                        </div>
                        
                        <div className="about-box box-four">
                            <h3>{cvData[3].title}</h3>
                            {open && (
                                cvData.map((item) => (
                                    item.details.map((detail, index) => (
                                        <SoftSkills key={index} {...detail} isOpen={open} />
                                    ))
                                ))
                            )}
                        </div>

                        <div className="about-box box-five">
                            <h3>{cvData[4].title}</h3>
                            {open && (
                                cvData.map((item) => (
                                    item.details.map((detail, index) => (
                                        <Personal key={index} {...detail} isOpen={open} />
                                    ))
                                ))
                            )}
                        </div>

                    </div> */}
                    
                </div>

            </div>
            
        </div>
    );
};
export default About;