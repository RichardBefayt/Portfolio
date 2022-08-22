/* eslint-disable import/no-anonymous-default-export */
import cinema from '../assets/images/cinema.jpg';
import restaurant from '../assets/images/restaurant.jpg';
import moto from '../assets/images/moto.jpg';

export default [
    {
        id: 1,
        slug: "https://monappcine.netlify.app/",
        subtitle: 'Salle de Cinéma (code en développement)',
        thumbnail: cinema,
        description: "Actuellement je rencontre un problème sur ma clé d'API (pourtant valide), ce qui empêche l'accès au site par Netlify. Malgré tout, vous devriez pouvoir y accéder avec la LDC : `npm start`. Bonne visite.",
        target: "https://github.com/RichardBefayt/monappcine",
    },
    {
        id: 2,
        subtitle: 'Restaurant (maquette en cours)',
        // slug: '',
        thumbnail: restaurant,
        description: 'Consultez la carte de notre restaurant, nous ne doutons pas que vous réserviez une table dans les 24h.',
        // target: "",
    },
    {
        id: 3,
        subtitle: 'Concessionnaire Moto (maquette en cours)',
        // slug: '',
        thumbnail: moto,
        description: "Envie d'un bolide ? Ne cherchez plus, vous l'avez trouvé.",
        // target: "",
    },
]