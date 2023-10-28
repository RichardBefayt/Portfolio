/* eslint-disable import/no-anonymous-default-export */

// Images Applications
import appCuisine from '../assets/images/applications/app-cuisine.jpg';
import appToDo from '../assets/images/applications/todo-list-react.jpg';

// Images Sites Web
import pizza from '../assets/images/websites/bs-pizza.jpg';
import restaurant from '../assets/images/websites/restaurant.jpg';
import VR from '../assets/images/websites/VR.png';
// import moto from '../assets/images/websites/moto.jpg';
// import cinema from '../assets/images/websites/cinema.jpg';

// Images Jeux
import voitures from '../assets/images/games/voitures.jpg';
import chevaux from '../assets/images/games/chevaux.jpg';
import labyrinthe from '../assets/images/games/labyrinthe.jpg';

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
                description: "Utilisation d'une API",
                technos: "HTML, CSS, JavaScript",
                target: "https://github.com/RichardBefayt/api-cuisine-1",
            },
            {
                id: 12,
                subtitle: 'To Do List',
                slug: 'https://first-todo-list-react.netlify.app/',
                thumbnail: appToDo,
                description: "Application simple en React",
                technos: "HTML, CSS, React",
                target: "https://github.com/RichardBefayt/todo-list-react",
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
                description: "Site vitrine (client IRL)",
                technos: "HTML, CSS, JavaScript",
                target: "https://github.com/RichardBefayt/Bs-Pizza",
            },
            {
                id: 22,
                subtitle: "L'Art Culinaire",
                slug: 'https://lartculinaire.netlify.app/',
                thumbnail: restaurant,
                description: "Animations, formulaire et dates en JS.",
                technos: "HTML, CSS, JavaScript",
                target: "https://github.com/RichardBefayt/l-art-culinaire",
            },
            {
                id: 23,
                subtitle: 'VIRTUALX',
                slug: 'https://virtualx.netlify.app/',
                thumbnail: VR,
                description: "Animations, Panier, Favoris, Login",
                technos: "HTML, CSS, JavaScript, Stripe",
                target: "https://github.com/RichardBefayt/VirtualX",
            },
            // {
            //     id: 24,
            //     subtitle: 'Blog (maquette en cours)',
            //     slug: '',
            //     thumbnail: blog,
            //     description: 'Souvenirs de voyages',
            //     // target: "",
            // },
            // {
            //     id: 25,
            //     subtitle: 'Ride On (code en développement)',
            //     // slug: '',
            //     thumbnail: moto,
            //     description: "Envie d'une balade en 2 roues ? Ne cherchez plus, vous l'avez trouvé.",
            //     // target: "",
            // },
            // {
            //     id: 26,
            //     slug: "https://monappcine.netlify.app/",
            //     subtitle: 'Salle de Cinéma (code en développement)',
            //     thumbnail: cinema,
            //     description: "Sorties ciné en temps réel",
            //     target: "",
            // },
        ]
    },
    {
        id: 3,
        title: 'Jeux',
        slug: 'jeux',
        introduction: "Jeux seul ou à plusieurs",
        composition: [
            {
                id: 31,
                subtitle: 'Course de voiture',
                slug: '/voitures',
                thumbnail: voitures,
                description: "Jeu au tour par tour. Lequel de vous ou de vos amis franchirez la ligne d'arrivée ?"
            },
            {
                id: 32,
                subtitle: 'Course de chevaux',
                slug: '/chevaux',
                thumbnail: chevaux,
                description: "Affrontez d'autres joueurs en temps réel dans une course intense de chevaux !",
            },
            {
                id: 33,
                subtitle: 'Labyrinthe',
                slug: '/labyrinthe',
                thumbnail: labyrinthe,
                description: '',
            },
        ]
    },
]