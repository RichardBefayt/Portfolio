import { useState } from 'react';

import './htmlLangage.css';

import titles from "../../../assets/images/html/Titres.png";
import links from "../../../assets/images/html/Liens.png"

const HtmlLangage = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='htmlLangage'>
            <div className='htmlLangage-presentation'>
                <h2>HTML</h2>
                <p>Le HTML est un langage qui nous permet de créer la structure statique de notre application</p>
                <button
                    className='btn'
                    onClick={() => setOpen(!open)}
                >
                    HTML
                </button>
                <div className={`${open ? 'snippets-container open' : 'snippets-container'}`}>
                    <button className='btn'>Titres</button>
                    <div className="snippets-content">
                        <img
                            className='snippets-img'
                            src={titles}
                            alt="Extraits codes HTML"
                        />
                        <p className="snippets-description">Il y a 6 niveaux de titres. A noter qu'il ne peut y avoir qu'un seul h1 par page</p>
                    </div>
                    <button className='btn'>Liens</button>
                    <div className="snippets-content">
                        <img
                            className='snippets-img'
                            src={links}
                            alt="Extraits codes HTML"
                        />
                        <p className="snippets-description">target="_blank" permet d'ouvir le lien dans un nouvel onglet.</p>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default HtmlLangage;