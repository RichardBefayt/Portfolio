/* eslint-disable import/no-anonymous-default-export */

// Images Applications
import appCuisine from '../assets/images/applications/app-cuisine-1.png';
import appToDo from '../assets/images/applications/todo-list-react.jpg';

// Images Sites Web
import pizza from '../assets/images/websites/bs-pizza.jpg';
import restaurant from '../assets/images/websites/restaurant.jpg';
import VR from '../assets/images/websites/VR.png';
// import moto from '../assets/images/websites/moto.jpg';
// import cinema from '../assets/images/websites/cinema.jpg';

// Images Jeux
// import voitures from '../assets/images/games/voitures.jpg';
// import chevaux from '../assets/images/games/chevaux.jpg';
// import labyrinthe from '../assets/images/games/labyrinthe.jpg';

export default [
    {
        id: 1,
        title: 'Applications',
        slug: 'applications',
        introduction: 'Applications Web Front-End',
        composition: [
            {
                id: 11,
                subtitle: 'API Cuisine',
                slug: 'https://api-cuisine-1.netlify.app',
                thumbnail: appCuisine,
                target: "Utilisation d'une API",
                technos: "HTML, CSS, JavaScript",
                tuto: true,
                personalProject: false,
                source: "https://github.com/RichardBefayt/api-cuisine-1",
            },
            {
                id: 12,
                subtitle: 'To Do List',
                slug: 'https://first-todo-list-react.netlify.app/',
                thumbnail: appToDo,
                target: "Application simple en React",
                technos: "HTML, CSS, React",
                tuto: true,
                personalProject: false,
                source: "https://github.com/RichardBefayt/todo-list-react",
            }
        ]
    },
    {
        id: 2,
        title: 'Sites Web',
        slug: 'sites-web',
        introduction: 'Sites Web Front-End',
        composition: [
            {
                id: 21,
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
                id: 22,
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
                id: 23,
                subtitle: 'VIRTUALX',
                slug: 'https://virtualx.netlify.app/',
                thumbnail: VR,
                target: "Animations, Panier, Favoris, Login",
                technos: "HTML, CSS, JavaScript, Stripe",
                tuto: false,
                personalProject: true,
                realClient: false,
                source: "https://github.com/RichardBefayt/VirtualX",
            },
            // {
            //     id: 24,
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
            //     id: 25,
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
            //     id: 26,
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
    },
    {
        id: 3,
        title: 'Jeux',
        slug: 'jeux',
        introduction: "Jeux seul ou à plusieurs",
        composition: [
            // {
            //     id: 31,
            //     subtitle: 'Course de voiture',
            //     slug: '/voitures',
            //     thumbnail: voitures,
            //     target: "Jeu au tour par tour. Lequel de vous ou de vos amis franchirez la ligne d'arrivée ?",
            //     technos: "HTML, CSS, JavaScript",
            //     tuto: false,
            //     personalProject: true,
            //     realClient: false,
            //     source: ""
            // },
            // {
            //     id: 32,
            //     subtitle: 'Course de chevaux',
            //     slug: '/chevaux',
            //     thumbnail: chevaux,
            //     target: "Affrontez d'autres joueurs en temps réel dans une course intense de chevaux !",
            //     technos: "HTML, CSS, JavaScript",
            //     tuto: false,
            //     personalProject: true,
            //     realClient: false,
            //     source: ""
            // },
            // {
            //     id: 33,
            //     subtitle: 'Labyrinthe',
            //     slug: '/labyrinthe',
            //     thumbnail: labyrinthe,
            //     target: '',
            //     technos: "HTML, CSS, JavaScript",
            //     tuto: false,
            //     personalProject: true,
            //     realClient: false,
            //     source: ""
            // },
        ]
    },
]