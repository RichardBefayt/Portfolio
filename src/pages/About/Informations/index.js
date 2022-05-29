

import "./informations.css";

const Informations = ({ open }) => {
    let className = "informations";

	if (open) {
		className = "informations informations--open";
	}
    return (
        <div className={className}>
                <h3 className='informations-subtitle'>Richard BEFAYT - Développeur Web Front-end</h3>
                <p className='informations-contact'>06.35.02.11.58 - rbefayt@gmail.com</p>
                <p className='informations-presentation'>Bonjour et bienvenue sur mon Portfolio. Passionné depuis toujours par la création, j'ai débuté ma carrière professionnelle par le cinéma. Aujourd'hui je me reconverti en tant que Développeur Web Front-End.</p>
        </div>
    );
}
export default Informations;