import { useState } from 'react';

import '../skillsLanguage.css';

import loops from "../../../assets/images/js/Boucles.png";
import conditions from "../../../assets/images/js/Conditions.png";
import objects from "../../../assets/images/js/Objets.png";
import arrays from "../../../assets/images/js/Tableaux.png";
import dom from "../../../assets/images/js/DOM.png";
import promises from "../../../assets/images/js/Promesses.png";

const JavascriptLangage = () => {
    const [openJs, setOpenJs] = useState(false);
    const [openLoop, setOpenLoop] = useState(false);
    const [openCondition, setOpenCondition] = useState(false);
    const [openObject, setOpenObject] = useState(false);
    const [openArray, setOpenArray] = useState(false);
    const [openDom, setOpenDom] = useState(false);
    const [openPromise, setOpenPromise] = useState(false);

    return (
        <div className='javascriptLangage-container'>
            <button
                className='btn'
                onClick={() => setOpenJs(!openJs)}
            >
                Javascript
            </button>
            <p className='language-presentation'>JavaScript est un langage de programmation qui permet d'implémenter des mécanismes complexes sur une page web. Il s'agit tout simplement de la logique de notre application.</p>
            <div className={`${openJs ? 'snippets-content open-language' : 'snippets-content'}`}>
                
                <div className="snippets-container">
                    {/* Factoriser */}
                    {/* Titres */}
                    <button
                        className='btn btn-light'
                        onClick={() => setOpenLoop(!openLoop)}
                    >
                        Boucles
                    </button>
                    <div className={`${openLoop ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={loops}
                            alt="Extraits codes Javascript : Boucles"
                        />
                        <p className="snippets-description">Il y a 6 niveaux de titres. A noter qu'il ne peut y avoir qu'un seul h1 par page</p>
                    </div>
                    
                    {/* Conditions */}
                    <button
                        className='btn btn-light'
                        onClick={() => setOpenCondition(!openCondition)}
                    >
                        Conditions
                    </button>
                    <div className={`${openCondition ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={conditions}
                            alt="Extraits codes Javascript : Conditions"
                        />
                        <p className="snippets-description">Conditions</p>
                    </div>
                    
                    {/* Objets */}
                    <button
                        className='btn btn-light'
                        onClick={() => setOpenObject(!openObject)}
                    >
                        Objets
                    </button>
                    <div className={`${openObject ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={objects}
                            alt="Extraits codes Javascript : Objets"
                        />
                        <p className="snippets-description">Objets</p>
                    </div>

                    {/* Tableaux */}
                    <button
                        className='btn btn-light'
                        onClick={() => setOpenArray(!openArray)}
                    >
                        Tableaux
                    </button>
                    <div className={`${openArray ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={arrays}
                            alt="Extraits codes Javascript : Tableaux"
                        />
                        <p className="snippets-description">Tableaux</p>
                    </div>

                    {/* DOM */}
                    <button
                        className='btn btn-light'
                        onClick={() => setOpenDom(!openDom)}
                    >
                        DOM
                    </button>
                    <div className={`${openDom ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={dom}
                            alt="Extraits codes Javascript : DOM"
                        />
                        <p className="snippets-description">DOM</p>
                    </div>

                    {/* Promesses */}
                    <button
                        className='btn btn-light'
                        onClick={() => setOpenPromise(!openPromise)}
                    >
                        Promesses
                    </button>
                    <div className={`${openPromise ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={promises}
                            alt="Extraits codes Javascript : Promesses"
                        />
                        <p className="snippets-description">Promesses</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default JavascriptLangage;