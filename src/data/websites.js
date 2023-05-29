/* eslint-disable import/no-anonymous-default-export */
import pizza from '../assets/images/websites/bs-pizza.jpg';
import restaurant from '../assets/images/websites/restaurant.jpg';
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
        description: "Consultez la carte de notre restaurant, nous ne doutons pas que vous réserviez une table dans les 24h.",
        technos: "HTML, CSS, JavaScript",
        target: "https://github.com/RichardBefayt/l-art-culinaire",
    },

    // {
    //     id: 4,
    //     subtitle: 'L'Univers du Geek (code en développement)',
    //     // slug: '',
    //     thumbnail: informatique,
    //     description: "L'endroit parfait pour s'équiper et décorer son propre univers.",
    //     // target: "",
    // },
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