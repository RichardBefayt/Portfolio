/* eslint-disable jsx-a11y/img-redundant-alt */

import infosImg from "../../../assets/images/pages/about/infosImg.jpg";
import infosEragny from "../../../assets/images/pages/about/eragny.jpg";

import "./informations.css";

const Informations = ({ openInfos, setOpenInfos }) => {
    return (
        <div className="informations">
            {/* Faire design carte de visite */}
            <div className="informations-header">
                <div className="informations-img-container">
                    <img className="informations-img" src={infosImg} alt="Petite photo de profil" />
                </div>
                <button
                    className="btn btn-light"
                    onClick={() => setOpenInfos(openInfos)}
                >
                    X
                </button>
            </div>
            <div className="informations-middle">
                <p>Bonjour et bienvenue sur mon Portfolio. Passionné depuis toujours par la création, j'ai débuté ma carrière professionnelle par le cinéma.<br/>Aujourd'hui je me reconverti en tant que Développeur Web Front-End.</p>
            </div>
            <div className='informations-footer'>
                <div className="informations-map-container">
                    <img className="informations-map" src={infosEragny} alt="Plan Éragny" />
                </div>

                <div className="informations-join">
                    <ul>
                        <li>Richard BEFAYT</li>
                        <li>59 avenue Roger Guichard</li>
                        <li>95610 - Éragny</li>
                        <li>06.35.02.11.58</li>
                        <li>richardbefaytdev@gmail.com</li>
                    </ul>
                </div>    
            </div>
        </div>
    );
}
export default Informations;