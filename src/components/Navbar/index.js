import { useState } from "react";

import { Link } from "react-router-dom";

import './navbar.css';

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [ click, setClick ] = useState(false);
    const handleClick = () => setClick(!click);

    const [ color, setColor ] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1 className="header-title">Portfolio</h1>
            </Link>

                <ul className={click ? "navbar-menu active" : "navbar-menu"}>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/a-propos">A Propos</Link>
                    </li>
                    <li>
                        <Link to="/snippets">Snippets</Link>
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
                    {click ? (
                        <FaTimes
                            size={20}
                            style={{color: "#fff"}}
                        />
                    ) : (
                        <FaBars
                            size={20}
                            style={{color: "#fff"}}
                        />
                    )}
                </div>
        </div>
    );
};

export default Navbar;