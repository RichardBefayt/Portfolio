/* eslint-disable import/no-anonymous-default-export */

import pizza from '../assets/images/websites/bs-pizza.jpg';
import restaurant from '../assets/images/websites/restaurant.jpg';
import VR from '../assets/images/websites/VR.png';
// import moto from '../assets/images/websites/moto.jpg';
// import cinema from '../assets/images/websites/cinema.jpg';

export default [
    {
        title: 'Sites Web',
        slug: 'sites-web',
        introduction: 'Sites Web Front-End',
        composition: [
            {
                id: 1,
                subtitle: 'Bs Pizza',
                slug: 'https://bs-pizza.netlify.app/',
                thumbnail: pizza,
                target: "Site vitrine (client IRL)",
                technos: "HTML, CSS, JavaScript",
                tuto: false,
                personalProject: true,
                realClient: true,
                source: "https://github.com/RichardBefayt/Bs-Pizza",
            },
            {
                id: 2,
                subtitle: "L'Art Culinaire",
                slug: 'https://lartculinaire.netlify.app/',
                thumbnail: restaurant,
                target: "Animations, formulaire et dates en JS.",
                technos: "HTML, CSS, JavaScript",
                tuto: false,
                personalProject: true,
                realClient: false,
                source: "https://github.com/RichardBefayt/l-art-culinaire",
            },
            {
                id: 3,
                subtitle: 'VIRTUALX',
                slug: 'https://virtualx.netlify.app/',
                thumbnail: VR,
                target: "Animations, Panier, Favoris, Login...",
                technos: "HTML, CSS, JavaScript, Stripe",
                tuto: false,
                personalProject: true,
                realClient: false,
                source: "https://github.com/RichardBefayt/VirtualX",
            },
            // {
            //     id: 4,
            //     subtitle: 'Blog (maquette en cours)',
            //     slug: '',
            //     thumbnail: blog,
            //     target: 'Souvenirs de voyages',
            //     technos: "HTML, CSS, JavaScript",
            //     tuto: false,
            //     personalProject: true,
            //     realClient: false,
            //     source: "",
            // },
            // {
            //     id: 5,
            //     subtitle: 'Ride On (code en développement)',
            //     // slug: '',
            //     thumbnail: moto,
            //     target: "Envie d'une balade en 2 roues ? Ne cherchez plus, vous l'avez trouvé.",
            //     technos: "HTML, CSS, JavaScript",
            //     tuto: false,
            //     personalProject: true,
            //     realClient: false,
            //     source: "",
            // },
            // {
            //     id: 6,
            //     slug: "https://monappcine.netlify.app/",
            //     subtitle: 'Salle de Cinéma (code en développement)',
            //     thumbnail: cinema,
            //     target: "Sorties ciné en temps réel",
            //     technos: "HTML, CSS, JavaScript",
            //     tuto: false,
            //     personalProject: true,
            //     realClient: false,
            //     source: "",
            // },
        ]
    }
]