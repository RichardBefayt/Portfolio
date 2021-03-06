/* eslint-disable import/no-anonymous-default-export */
import voitures from '../assets/images/voitures.jpg';
import chevaux from '../assets/images/chevaux.jpg';
import labyrinthe from '../assets/images/labyrinthe.jpg';

export default [
    {
        id: 1,
        subtitle: 'Course de voiture (maquette en cours)',
        // slug: '',
        thumbnail: voitures,
        description: "Jeu au tour par tour. Lequel de vous ou de vos amis franchirez la ligne d'arrivée ?"
    },
    {
        id: 2,
        subtitle: 'Course de chevaux (maquette en cours)',
        // slug: '',
        thumbnail: chevaux,
        description: "Affrontez d'autres joueurs en temps réel dans une course de chevaux intense !",
    },
    {
        id: 3,
        subtitle: 'Labyrinthe (maquette en cours)',
        // slug: '',
        thumbnail: labyrinthe,
        description: 'Saurez-vous trouver la sortie dans ce labyrinthe rempli de pièges ?!',
    },
]