/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect, useRef } from "react";

import Informations from "./Informations";
import Formations from "./Formations";
import Personal from "./Personal";

import './about.css';

import imgProfile from "../../assets/images/apropos-img.jpg";
import imgJobs from "../../assets/images/travail.jpg";
import imgBike from "../../assets/images/kawa.jpg";
import Footer from "../../components/Footer";

const About = () => {
    const [openInfos, setOpenInfos] = useState(false);
    const [openFormations, setOpenFormations] = useState(false);
    const [openPersonal, setOpenPersonal] = useState(false);

    return (
        <div className='about'>
            <h1 className='about-title'>Curriculum Vitae</h1>
            
            <div className='about-container-one'>
                {/* Informations */}
                <div
                    className="about-container-two"
                    onClick={() => setOpenInfos(!openInfos)}
                >
                    <div className="about-container-img">
                        <img src={imgProfile} alt="Photo de profil" />
                    </div>
                    <h3>Informations</h3>
                </div>
                <div className={`about-dropdown ${openInfos ? "active" : "inactive"}`}>
                    <Informations
                        open={openInfos}
                        setOpenInfos={setOpenInfos}
                    />
                </div>

                {/* Expériences professionnelles */}
                <div
                    className="about-container-two"
                    onClick={() => {setOpenFormations(!openFormations)}}
                >
                    <div className="about-container-img">
                        <img src={imgJobs} alt="Photo de profil" />
                    </div>
                    <h3>Expériences professionnelles</h3>
                </div>
                <div className={`about-dropdown ${openFormations ? "active" : "inactive"}`}>
                    <Formations
                        open={openFormations}
                        setOpenFormations={setOpenFormations}
                    />
                </div>
                
                {/* Loisirs */}
                <div
                    className="about-container-two"
                    onClick={() => setOpenPersonal(!openPersonal)}
                >
                    <div className="about-container-img">
                        <img src={imgBike} alt="Photo de profil" />
                    </div>
                    <h3>Loisirs</h3>
                </div>
                <div className={`about-dropdown ${openPersonal ? "active" : "inactive"}`}>
                    <Personal
                        open={openPersonal}
                        setOpenPersonal={setOpenPersonal}
                    />
                </div>
                
            </div>

            <Footer />
        </div>
    );
};
export default About;