import { Link } from "react-router-dom";

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaInstagram, FaGithub, FaCodepen } from "react-icons/fa";

import './home.css';

import imgProfil from "../../assets/images/profil.png";
import imgPunaise from "../../assets/images/punaise.png";

const Home = () => (
    <div className='home'>
        <div className="home-title box">
            <Link to="/">
                <h1>PORTFOLIO</h1>
            </Link>
        </div>

        <div className="home-about box">
            <div className="home-about-img-container">
                <img className="home-about-img" src={imgProfil} alt="" />
                <img className="home-about-img2" src={imgPunaise} alt="punaise" />
            </div>

            <div className="home-about-name">
                <h2>Richard BEFAYT</h2>
            </div>

            <div className="home-about-job">
                <h3>Développeur Front-End</h3>
            </div>

            <div className="home-about-infos">
                <div className="details">
                    <FaHome className="fas" />
                    <div className="details-container">
                        <span className="text address">59 avenue Roger Guichard</span>
                        <span>95610 Éragny</span>
                    </div>
                </div>
                <div className="details">
                    <FaPhone className="fas" />
                    <span className="text phone">06.35.02.11.58</span>
                </div>
                <div className="details">
                    <Link to="/contact">
                        <FaMailBulk className="fas" />
                        <span className="text">richardbefaytdev@gmail.com</span>
                    </Link>
                </div>
            </div>

            <div className="home-about-social">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/richardbefayt/" target="_blank" rel="noreferrer"><FaLinkedin className="social-link" /></a>

                {/* Instagram */}
                <a href="https://www.instagram.com/richardbefaytdev/" target="_blank" rel="noreferrer"><FaInstagram className="social-link" /></a>

                {/* Github */}
                <a href="https://github.com/RichardBefayt" target="_blank" rel="noreferrer"><FaGithub className="social-link" /></a>

                {/* CodePen */}
                <a href="https://codepen.io/sprichie" target="_blank" rel="noreferrer"><FaCodepen className="social-link" /></a>

                {/* Twitter */}
                <a href="https://twitter.com/RBefayt" target="_blank" rel="noreferrer"><FaTwitter className="social-link" /></a>
            </div>
        </div>

        <div className="home-cv box">
            <h2>CV</h2>
        </div>

        <div className="home-websites box">
            <h2>SITES WEB</h2>
        </div>


        <div className="home-applications box">
            <h2>APPLICATIONS</h2>
        </div>


        <div className="home-games box">
            <h2>JEUX</h2>
        </div>


        <div className="home-contact box">
            <h2>CONTACT</h2>
        </div>

    </div>
);

export default Home;