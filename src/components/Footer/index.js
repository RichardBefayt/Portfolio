import './footer.css';

import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => (
    <footer className='footer'>

        <div className='footer-container'>

            <div className='location'>
                <FaHome size={20} style={{color: "#fff", marginRight: "1rem", marginLeft: "2rem" }} />
                <div>
                    <h4>59 avenue Roger Guichard, 95610 - Éragny</h4>
                </div>
            </div>

            <div className='phone'>
                <h4>
                    <FaPhone size={20} style={{color: "#fff", marginRight: "1rem", marginLeft: "2rem" }} />
                    06.35.02.11.58
                </h4>
            </div>

            <div className='email'>
                <h4>
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "1rem", marginLeft: "2rem" }} />
                    rbefayt@gmail.com
                </h4>
            </div>

            <div className='social'>
                <FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem" }} />
                <FaTwitter size={20} style={{color: "#fff", marginRight: "2rem" }} />
                <FaGithub size={20} style={{color: "#fff", marginRight: "2rem" }} />
            </div>
            
        </div>

    </footer>
);

export default Footer;