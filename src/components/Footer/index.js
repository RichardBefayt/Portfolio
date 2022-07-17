import './footer.css';

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => (
    <footer className='footer'>

        <div className='main-content'>
            
            <div className="left box">
                <h2>A propos</h2>
                <div className="content">
                    <p className="description">Bonjour et bienvenue sur mon Portfolio. Pour suivre les prochaines avancées de mon travail, rendez-vous sur les réseaux sociaux.</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/richardbefayt/" target="_blank" rel="noreferrer"><FaLinkedin className="social-link" /></a>
                        <a href="https://twitter.com/RichardBefayt" target="_blank" rel="noreferrer"><FaTwitter className="social-link" /></a>
                        <a href="https://www.instagram.com/sprichie/" target="_blank" rel="noreferrer"><FaInstagram className="social-link" /></a>
                        <a href="https://github.com/RichardBefayt" target="_blank" rel="noreferrer"><FaGithub className="social-link" /></a>
                    </div>
                </div>
            </div>

            <div className="right box">
                <h2>Coordonnées</h2>
                <div className="content">
                    <div className="place">
                        <FaHome className="fas" />
                        <span className="text">59 avenue Roger Guichard, 95610 Éragny</span>
                    </div>
                    <div className="phone">
                        <FaPhone className="fas" />
                        <span className="text">06.35.02.11.58</span>
                    </div>
                    <div className="place">
                        <FaMailBulk className="fas" />
                        <span className="text">rbefayt@gmail.com</span>
                    </div>
                </div>
            </div>

        </div>

    </footer>
);

export default Footer;