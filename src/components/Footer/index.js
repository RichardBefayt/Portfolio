import { Link } from "react-router-dom";

import './footer.css';

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => (
    <footer className='footer'>

        <div className='main-content'>
            
            <div className="left box">
                <h2>Réseaux</h2>
                <div className="content">
                    <div className="social">
                        <a href="https://www.linkedin.com/in/richardbefayt/" target="_blank" rel="noreferrer"><FaLinkedin className="social-link" /></a>
                        <a href="https://www.instagram.com/richardbefaytdev/" target="_blank" rel="noreferrer"><FaInstagram className="social-link" /></a>
                        <a href="https://twitter.com/RichardBefayt" target="_blank" rel="noreferrer"><FaTwitter className="social-link" /></a>
                        <a href="https://github.com/RichardBefayt" target="_blank" rel="noreferrer"><FaGithub className="social-link" /></a>
                    </div>
                </div>
            </div>

            <div className="right box">
                <h2>Coordonnées</h2>
                <div className="content">
                    <div className="place">
                        <FaHome className="fas" />
                        <span className="text address">59 avenue Roger Guichard, 95610 Éragny</span>
                    </div>
                    <div className="phone">
                        <FaPhone className="fas" />
                        <span className="text phone">06.35.02.11.58</span>
                    </div>
                    <div className="place">
                        <Link to="/contact">
                            <FaMailBulk className="fas" />
                        </Link>
                        <span className="text">richardbefaytdev@gmail.com</span>
                    </div>
                </div>
            </div>

        </div>

    </footer>
);

export default Footer;