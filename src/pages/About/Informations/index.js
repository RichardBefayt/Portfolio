/* eslint-disable jsx-a11y/img-redundant-alt */

import infosImg from "../../../assets/images/infosImg.jpg";
import infosEragny from "../../../assets/images/eragny.jpg";

import "./informations.css";

const Informations = ({ openInfos, setOpenInfos }) => {
    return (
        <div className="informations">
            {/* Faire design carte de visite */}
            <div className="informations-header">
                <div className="informations-img-container">
                    <img className="informations-img" src={infosImg} alt="" />
                </div>
                <button
                    className="btn btn-light"
                    onClick={() => setOpenInfos(openInfos)}
                >
                    X
                </button>
            </div>
            <div className="informations-text">
                <div className="informations-presentation">
                    <p>Bonjour et bienvenue sur mon Portfolio. Passionné depuis toujours par la création, j'ai débuté ma carrière professionnelle par le cinéma.</p>
                    
                    <p>Aujourd'hui je me reconverti en tant que Développeur Web Front-End.</p>
                </div>
                
                
                <div className='informations-contact'>
                    <div className="informations-map-container">
                        <img className="informations-map" src={infosEragny} alt="Plan Éragny" />
                    </div>

                    <div className="informations-join">
                        <ul>
                            <li>Richard BEFAYT</li>
                            <li>59 avenue Roger Guichard</li>
                            <li>95610 - Éragny</li>
                            <li>06.35.02.11.58</li>
                            <li>rbefayt@gmail.com</li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}
export default Informations;