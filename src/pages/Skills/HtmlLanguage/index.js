import { useState } from 'react';

import '../skillsLanguage.css';

import titles from "../../../assets/images/html/Titres.png";
import images from "../../../assets/images/html/Images.png";
import lists from "../../../assets/images/html/Listes.png";
import array from "../../../assets/images/html/Tableaux.png";
import form from "../../../assets/images/html/Formulaires.png";

const HtmlLangage = () => {

    const [openHtml, setOpenHtml] = useState(false);
    const [openTitle, setOpenTitle] = useState(false);
    const [openList, setOpenList] = useState(false);
    const [openImg, setOpenImg] = useState(false);
    const [openArray, setOpenArray] = useState(false);
    const [openForm, setOpenForm] = useState(false);

    return (
        <div className='htmlLangage-container'>
            <button
                className='btn'
                onClick={() => setOpenHtml(!openHtml)}
            >
                HTML
            </button>
            <p className='language-presentation'>Le HTML est un langage qui nous permet de créer la structure statique (squelette) de notre application.</p>
            <div className={`${openHtml ? 'snippets-content open-language' : 'snippets-content'}`}>
                
                <div className="snippets-container">
                    {/* Factoriser */}
                    {/* Titres */}
                    <button
                        className='btn btn-light'
                        onClick={() => setOpenTitle(!openTitle)}
                    >
                        Titres
                    </button>
                    <div className={`${openTitle ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={titles}
                            alt="Extraits codes HTML : Titres"
                        />
                        <p className="snippets-description">Il y a 6 niveaux de titres. A noter qu'il ne peut y avoir qu'un seul h1 par page</p>
                    </div>

                    {/* Liens & Images */}
                    <button
                        className='btn btn-light'
                        onClick={() => setOpenImg(!openImg)}
                    >
                        Liens & Images
                    </button>
                    <div className={`${openImg ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={images}
                            alt="Extraits codes HTML : Images"
                            />
                        <p className="snippets-description">Grâce à l'attribut "target='_blank'", le lien s'ouvre dans un nouvel onglet.</p>
                    </div>

                    {/* Listes */}
                    <button
                        className='btn btn-light'
                        onClick={() => setOpenList(!openList)}
                    >
                        Listes
                    </button>
                    <div className={`${openList ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={lists}
                            alt="Extraits codes HTML : Listes"
                            />
                        <p className="snippets-description">Listes ordonnées et non-ordonnées.</p>
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
                            src={array}
                            alt="Extraits codes HTML : Tableaux"
                            />
                        <p className="snippets-description">Tableaux.</p>
                    </div>

                    {/* Formulaires */}
                    <button
                        className='btn btn-light'
                        onClick={() => setOpenForm(!openForm)}
                    >
                        Formulaires
                    </button>
                    <div className={`${openForm ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={form}
                            alt="Extraits codes HTML : Formulaires"
                            />
                        <p className="snippets-description">Formulaires.</p>
                    </div>
                </div>

            </div>
        </div>
    );

}
export default HtmlLangage;