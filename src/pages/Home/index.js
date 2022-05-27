import { NavLink } from "react-router-dom";
import background from "../../assets/images/background.jpg";

import './home.css';

const Home = () => (
    <div className='home'>
        <div className='background'>
            <img className='background-img' src={background} alt="Fond d'écran" />
        </div>
        
        <div className='content'>
            <h2 className='title'>Richard Befayt</h2>
            <h3 className='subtitle'>Développeur Web Front-End</h3>
            
            <div className='buttons'>
                <NavLink to='/projets' className='btn'>Projets</NavLink>
                <NavLink to='/contact' className='btn btn-light'>Contact</NavLink>
            </div>
        </div>
    </div>
);

export default Home;