/* eslint-disable import/no-anonymous-default-export */
import pizza from '../assets/images/websites/bs-pizza.jpg';
import restaurant from '../assets/images/websites/restaurant.jpg';
import VR from '../assets/images/websites/VR.png';
// import moto from '../assets/images/websites/moto.jpg';
// import cinema from '../assets/images/websites/cinema.jpg';

export default [
    // {
    //     id: 1,
    //     subtitle: 'Blog (maquette en cours)',
    //     slug: '',
    //     thumbnail: blog,
    //     description: 'Actus en temps réel',
    //     // target: "",
    // },
    
    {
        id: 2,
        subtitle: 'Bs Pizza',
        slug: 'https://bs-pizza.netlify.app/',
        thumbnail: pizza,
        description: "Pour déguster les meilleures pizzas de la région, c'est ici.",
        technos: "HTML, CSS, JavaScript",
        target: "https://github.com/RichardBefayt/Bs-Pizza",
    },
    {
        id: 3,
        subtitle: "L'Art Culinaire",
        slug: 'https://lartculinaire.netlify.app/',
        thumbnail: restaurant,
        description: "Consultez la carte de notre restaurant et réservez votre table.",
        technos: "HTML, CSS, JavaScript",
        target: "https://github.com/RichardBefayt/l-art-culinaire",
    },

    {
        id: 4,
        subtitle: 'VIRTUALX',
        slug: 'https://virtualx.netlify.app/',
        thumbnail: VR,
        description: "Découvrez votre monde sous un nouveau regard",
        target: "https://github.com/RichardBefayt/VirtualX",
    },
    // {
    //     id: 5,
    //     subtitle: 'Ride On (code en développement)',
    //     // slug: '',
    //     thumbnail: moto,
    //     description: "Envie d'une balade en 2 roues ? Ne cherchez plus, vous l'avez trouvé.",
    //     // target: "",
    // },
    // {
    //     id: 6,
    //     slug: "https://monappcine.netlify.app/",
    //     subtitle: 'Salle de Cinéma (code en développement)',
    //     thumbnail: cinema,
    //     description: "Sorties ciné en temps réel",
    //     target: "",
    // },
]