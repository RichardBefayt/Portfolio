import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DownloadCV from "./DownloadCV";
import AboutItems from "./AboutItems";
import curriculumData from "../../data/curriculumData";

import './about.css';
import imgProfile from "../../assets/images/pages/about/about-profil-img.jpeg";

const About = () => {
    const [cvData, setCVData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await new Promise((resolve) =>
                    setTimeout(() => resolve(curriculumData), 1000)
                );
                setCVData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données CV : ', error);
            }
        };
        fetchData();
    }, []);

    const [openBox, setOpenBox] = useState({});

    const handleInformationsToggle = (boxId) => {
        setOpenBox(prevState => ({
            ...prevState,
            [boxId]: !prevState[boxId]
        }));
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
                                    Contact
                                </button>
                            </Link>

                            <DownloadCV />
                        </div>
                    </div>
                </div>

                <div className="about-bottom">
                <div className="about-boxes">
                    {cvData.map((item) => (
                        <div
                            key={item.id}
                            className={`about-box box-${item.id}`}
                            onClick={() => handleInformationsToggle(item.id)}
                        >
                            <h3 className={openBox[item.id] ? 'title-open' : 'title-closed'}>
                                {item.title}
                            </h3>
                            {openBox[item.id] && <AboutItems {...item} isOpen={openBox[item.id]} />}
                        </div>
                        ))}

                    </div>
                    
                </div>

            </div>
            
        </div>
    );
};

export default About;