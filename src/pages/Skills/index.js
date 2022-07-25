import './skills.css';

const Skills = () => (
    <div className='skills'>
        <div className='skills-img__container'></div>
        <h1 className='skills-title'>Savoir-faire</h1>
        <p>Sont regroupés ici les notions acquises durant ma formation ainsi que par la pratique personnelle. Il ne s'agit en aucun cas d'un cours ni d'un tuto.</p>
        <div className='skills-langage'>
            {/* Faire des sous-composants pour chaque langage */}
            <h2>HTML</h2>
            <p>Le HTML est un langage qui nous permet de créer la structure statique de notre application</p>
            <p> En créant un petit blog, montrer les composants : blocs, titres, classes & ids, inputs, boutons, datasets, etc...</p>
        </div>

        <div className='skills-langage'>
            <h2>CSS/SASS</h2>
            <p>Le CSS ou le SASS nous permettent d'habiller notre application en lui attribuant du style</p>
            <p>Habiller le blog en montrant principalement :</p>
            <ul>
                <li>Positions</li>
                <li>Flexbox</li>
                <li>Grid</li>
                <li>Media Queries, etc...</li>
            </ul>
        </div>

        <div className='skills-langage'>
            <h2>JavaScript</h2>
            <p>Le JavaScript est un langage de programmation qui nous permet de tout faire, mais ici on se contentera d'inclure de la logique à notre application.</p>
            <ul>
                <li>Fonctions</li>
                <li>Boucles</li>
                <li>Conditions</li>
                <li>DOM</li>
                <li>Promesses</li>
                <li>Orienté objet</li>
            </ul>
        </div>

        <div className='skills-langage'>
            <h2>React/Redux</h2>
            <p>React est un framework de JavaScript dont le but est de créer une Single Page Application.</p>
            <ul>
                <li>Composants</li>
                <li>Hooks</li>
                <li>Props</li>
                <li>Store & Reducers (principe d'immuabilité)</li>
                <li>Action Types & Action Creator</li>
            </ul>
        </div>

        <div className='skills-langage'>
            <h2>NodeJS</h2>
            <ul>
                <li>Express</li>
                <li>Dotenv</li>
                <li>Routes</li>
                <li>EJS</li>
            </ul>
        </div>

        <div className='skills-langage'>
            <h2>SQL</h2>
            <ul>
                <li>MCD & MLD</li>
                <li>CRUD</li>
            </ul>
        </div>
        

        
        
        
        
        
    </div>
);

export default Skills;