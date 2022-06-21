/* eslint-disable jsx-a11y/img-redundant-alt */

import "./informations.css";

import meImg from '../../../assets/images/apropos-img.jpg';

const Informations = () => {
    return (
        <div className="informations">
            <p className='informations-presentation'>Bonjour et bienvenue sur mon Portfolio. Passionné depuis toujours par la création, j'ai débuté ma carrière professionnelle par le cinéma. Aujourd'hui je me reconverti en tant que Développeur Web Front-End.</p>
            <div className='img-container'>
                <img className='informations-img' src={meImg} alt="Photo de profil" />
            </div>
            <p className='informations-subtitle'>Richard BEFAYT - Développeur Web Front-end</p>
            <p className='informations-contact'>06.35.02.11.58 - rbefayt@gmail.com</p>
        </div>
    );
}
export default Informations;