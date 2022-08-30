/* eslint-disable jsx-a11y/img-redundant-alt */

import "./informations.css";

const Informations = ({ openInfos, setOpenInfos }) => {
    return (
        <div className="informations">
            {/* Design carte de visite */}
            <button
                className="btn btn-light"
                onClick={() => setOpenInfos(openInfos)}
            >
                X
            </button>
            
            <p className='informations-presentation'>Bonjour et bienvenue sur mon Portfolio. Passionné depuis toujours par la création, j'ai débuté ma carrière professionnelle par le cinéma. <br/> Aujourd'hui je me reconverti en tant que Développeur Web Front-End.</p>
            
            <p className='informations-subtitle'>Richard BEFAYT - Développeur Web Front-end</p>
            
            <p className='informations-contact'>06.35.02.11.58 - rbefayt@gmail.com</p>
        </div>
    );
}
export default Informations;