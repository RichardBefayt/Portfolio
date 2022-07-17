import { Link } from "react-router-dom";

import construction from "../../assets/images/construction.jpg";

import './in-progress.css';

const InProgress = () => (
    <div className='in-progress'>
        <Link className="in-progress__link" to="/projets">⬅ Retour</Link>

        <div className='in-progress__img-container'>
            <img className="in-progress__img" src={construction} alt="Fond d'écran" />
        </div>
        
        <div className='in-progress__content'>
            <p className="in-progress__container-text">En cours de création</p>
            <div className="in-progress__container-emoji">👷‍♂️</div>
        </div>

    </div>
);

export default InProgress;