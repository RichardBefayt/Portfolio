import { Link } from "react-router-dom";

import './presentation.css';


import background from "../../assets/images/background.jpg";

const Presentation = () => (
    <div className='presentation'>
        <div className='background'>
            <img className='background-img' src={background} alt="Fond d'écran" />
        </div>
        
        <div className='content'>
            <h2 className='title'>Richard Befayt</h2>
            <h3 className='subtitle'>Développeur Web Front-End</h3>
            
            <div className='buttons'>
                <Link to='/projets' className='btn'>Projets</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>

    </div>
);

export default Presentation;