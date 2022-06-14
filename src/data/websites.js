/* eslint-disable import/no-anonymous-default-export */
import cinema from '../assets/images/cinema.jpg';
import restaurant from '../assets/images/restaurant.jpg';
import moto from '../assets/images/moto.jpg';

export default [
    {
        id: 1,
        subtitle: 'Salle de Cinéma',
        slug: 'cinema',
        thumbnail: cinema,
        description: 'Réservez votre place de cinéma, consultez les bandes-annonces, sans oublier de faire un tour sur notre boutique pour commander vos friandises.',
    },
    {
        id: 2,
        subtitle: 'Restaurant',
        slug: 'restaurant',
        thumbnail: restaurant,
        description: 'Consultez la carte de notre restaurant, nous ne doutons pas que vous réserviez une table dans les 24h.',
    },
    {
        id: 3,
        subtitle: 'Concessionnaire Moto',
        slug: 'moto',
        thumbnail: moto,
        description: "Envie d'un bolide ? Ne cherchez plus, vous l'avez trouvé.",
    },
]