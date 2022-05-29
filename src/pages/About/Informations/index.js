import { useSelector, useDispatch } from "react-redux";

import "./informations.css";

const Informations = () => {
    const dispatch = useDispatch();
    const isClick = useSelector((state) => state.curriculum.isClick);

    return (
        <div
            className={isClick ? "informations active" : "informations"}
            onClick={() => dispatch({ type: "TOGGLE_SETTINGS" })}
        >

            <h2 className="informations-title">Informations</h2>
                <h3 className='informations-subtitle'>Richard BEFAYT - Développeur Web Front-end</h3>
                <p className='informations-contact'>06.35.02.11.58 - rbefayt@gmail.com</p>
                <p className='informations-presentation'>Bonjour et bienvenue sur mon Portfolio. Passionné depuis toujours par la création, j'ai débuté ma carrière professionnelle par le cinéma. Aujourd'hui je me reconverti en tant que Développeur Web Front-End.</p>
        </div>
    );
}
export default Informations;