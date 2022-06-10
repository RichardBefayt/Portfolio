import { NavLink } from "react-router-dom";
import background from "../../assets/images/background.jpg";

import './home.css';

const Home = () => (
    <div className='home'>
        <div className='home-background__img-container'>
            <img className='home-background__img' src={background} alt="Fond d'écran" />
        </div>
        
        <div className='home-content'>
            <h2 className='home-title'>Richard Befayt</h2>
            <h3 className='home-subtitle'>Développeur Web</h3>
            
            <div className='home-buttons'>
                <NavLink to='/projets' className='btn'>Projets</NavLink>
                <NavLink to='/contact' className='btn btn-light'>Contact</NavLink>
            </div>
        </div>
    </div>
);

export default Home;