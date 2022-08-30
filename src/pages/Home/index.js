import { NavLink } from "react-router-dom";

import './home.css';

const Home = () => (
    <div className='home'>
        <div className='home-content'>
            <h2 className='home-title'>Richard Befayt</h2>
            <h3 className='home-subtitle'>Développeur Web Front-End</h3>
            
            <div className='home-buttons'>
                <NavLink to='/snippets' className='btn'>Snippets</NavLink>
                <NavLink to='/projets' className='btn'>Projets</NavLink>
                <NavLink to='/contact' className='btn'>Contact</NavLink>
            </div>
        </div>
    </div>
);

export default Home;