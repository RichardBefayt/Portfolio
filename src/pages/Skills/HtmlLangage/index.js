import { useState } from 'react';

import './htmlLangage.css';

import titles from "../../../assets/images/html/Titres.png";
import links from "../../../assets/images/html/Liens.png";
import lists from "../../../assets/images/html/Listes.png";
import images from "../../../assets/images/html/Images.png";
import buttons from "../../../assets/images/html/Boutons.png";

const HtmlLangage = () => {

    const [openHtml, setOpenHtml] = useState(false);
    const [openTitle, setOpenTitle] = useState(false);
    const [openLink, setOpenLink] = useState(false);
    const [openList, setOpenList] = useState(false);
    const [openImg, setOpenImg] = useState(false);
    const [openButton, setOpenButton] = useState(false);

    return (
        <div className='htmlLangage-container'>
            <button
                className='btn'
                onClick={() => setOpenHtml(!openHtml)}
            >
                HTML
            </button>
            <p className='htmlLangage-presentation'>Le HTML est un langage qui nous permet de créer la structure statique de notre application.</p>
            <div className={`${openHtml ? 'snippets-content open' : 'snippets-content'}`}>
                
                <div className="snippets-container">
                    {/* Titres */}
                    <button
                        className='btn'
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

                    {/* Liens */}
                    <button
                        className='btn'
                        onClick={() => setOpenLink(!openLink)}
                    >
                        Liens
                    </button>
                    <div className={`${openLink ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={links}
                            alt="Extraits codes HTML : Liens"
                            />
                        <p className="snippets-description">target="_blank" permet d'ouvrir le lien dans un nouvel onglet.</p>
                    </div>

                    {/* Images */}
                    <button
                        className='btn'
                        onClick={() => setOpenImg(!openImg)}
                    >
                        Images
                    </button>
                    <div className={`${openImg ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={images}
                            alt="Extraits codes HTML : Images"
                            />
                        <p className="snippets-description">Images.</p>
                    </div>

                    {/* Listes */}
                    <button
                        className='btn'
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

                    {/* Boutons */}
                    <button
                        className='btn'
                        onClick={() => setOpenButton(!openButton)}
                    >
                        Boutons
                    </button>
                    <div className={`${openButton ? 'snippets-content open' : 'snippets-content'}`}>
                        <img
                            className='snippets-img'
                            src={buttons}
                            alt="Extraits codes HTML : Boutons"
                            />
                        <p className="snippets-description">Boutons.</p>
                    </div>
                </div>

            </div>
        </div>
    );

}
export default HtmlLangage;