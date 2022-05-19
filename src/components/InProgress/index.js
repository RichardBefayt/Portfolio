import construction from "../../assets/images/construction.jpg";

import './in-progress.css';

const InProgress = () => (
    <div className='in-progress'>
        <img className="in-progress__img" src={construction} alt="Fond d'écran" />
        <div className='in-progress__container'>
            <p className="in-progress__container-text">Construction en cours</p>
            <div className="in-progress__container-emoji">👷‍♂️</div>
        </div>
    </div>
);

export default InProgress;