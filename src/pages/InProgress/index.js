import { Link } from "react-router-dom";

import './in-progress.css';

const InProgress = () => (
    <div className='in-progress'>
        <p className="in-progress-text">En cours de création</p>
        <p className="in-progress-emoji">👷‍♂️</p>

        <Link className="in-progress-link" to="/">
            <button type="button" className="btn">Retour à l'accueil</button>
        </Link>
    </div>
);

export default InProgress;