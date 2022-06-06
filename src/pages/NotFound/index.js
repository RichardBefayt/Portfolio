import { Link } from "react-router-dom";

import './not-found.css';

const NotFound = () => (
    <div className='not-found'>
        <h1 className="not-found__title">404</h1>
        <p className="not-found__text">Désolé, nous n'avons pas trouver ce que vous cherchiez.</p>
        <Link className="not-found__link" to="/">
            <button type="button" className="btn">Retour à l'accueil</button>
        </Link>
    </div>
);

export default NotFound;