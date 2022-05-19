import { Link } from "react-router-dom";

import './header.css';

const Header = () => (
    <header className='header'>
        <Link className='header-link' to="/">
            <h1 className="header-title">Portfolio</h1>
        </Link>
    </header>
);

export default Header;