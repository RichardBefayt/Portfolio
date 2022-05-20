import { useState } from "react";

import { Link } from "react-router-dom";

import './navbar.css';

// Icône hamburger de la librairie react-icons, de la catégorie "fa"
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [ click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className='navbar'>
            {/* Ternaire : au click j'affiche la classe active, sinon la classe de base */}
            <ul className={click ? "navbar-menu active" : "navbar-menu"}>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/a-propos">A Propos</Link>
                </li>
                <li>
                    <Link to="/projets">Projets</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>

            <div className='navbar-hamburger' onClick={handleClick}>
                {/* Ternaire : au click j'affiche la croix pour fermer, sinon j'affiche l'icône hamburger */}
                {click ? (<FaTimes size={20} style={{color: "#fff"}} />): (<FaBars size={20} style={{color: "#fff"}} />)}
            </div>
        </nav>
    );
};

export default Navbar;