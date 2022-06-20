import { NavLink } from "react-router-dom";

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
                        <NavLink to="#"><FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem" }} /></NavLink>
                        <NavLink to="#"><FaTwitter size={20} style={{color: "#fff", marginRight: "2rem" }} /></NavLink>
                        <NavLink to="#"><FaInstagram size={20} style={{color: "#fff", marginRight: "2rem" }} /></NavLink>
                        <NavLink to="#"><FaGithub size={20} style={{color: "#fff", marginRight: "2rem" }} /></NavLink>
                    </div>
                </div>
            </div>

            <div className="center box">
                <h2>Coordonnées</h2>
                <div className="content">
                    <div className="place">
                        <FaHome size={20} style={{color: "#fff", marginRight: "1rem", marginLeft: "2rem" }} />
                        <span className="text">59 avenue Roger Guichard, 95610 Éragny</span>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{color: "#fff", marginRight: "1rem", marginLeft: "2rem" }} />
                        <span className="text">06.35.02.11.58</span>
                    </div>
                    <div className="place">
                        <FaMailBulk size={20} style={{color: "#fff", marginRight: "1rem", marginLeft: "2rem" }} />
                        <span className="text">rbefayt@gmail.com</span>
                    </div>
                </div>
            </div>

            {/* <div className="right box">
                <h2>Contact</h2>
                <div className="content">
                    <form action="#">
                        <div className="email">
                            <div className="text">Email *</div>
                            <input className="right-input" type="email" required />
                        </div>
                        <div className="msg">
                            <div className="text">Message *</div>
                            <textarea rows="2" cols="25" required></textarea>
                        </div>
                        <div className="btn-content">
                            <button className="btn" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div> */}
            
        </div>

    </footer>
);

export default Footer;