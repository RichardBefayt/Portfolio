/* eslint-disable import/no-anonymous-default-export */

import voitures from '../assets/images/pages/games/voitures.jpg';
import chevaux from '../assets/images/pages/games/chevaux.jpg';
import labyrinthe from '../assets/images/pages/games/labyrinthe.jpg';

export default [
    {
        title: 'Jeux',
        slug: 'jeux',
        introduction: '',
        composition: [
            {
                id: 1,
                subtitle: 'Course de voiture (maquette en cours)',
                slug: '',
                thumbnail: voitures,
                description: "",
                technos: '',
                source:'',
            },
            {
                id: 2,
                subtitle: 'Course de chevaux (maquette en cours)',
                slug: '',
                thumbnail: chevaux,
                description: "",
                technos: '',
                source:'',
            },
            {
                id: 3,
                subtitle: 'Labyrinthe (maquette en cours)',
                slug: '',
                thumbnail: labyrinthe,
                description: '',
                technos: '',
                source:'',
            },
        ]
    }
]