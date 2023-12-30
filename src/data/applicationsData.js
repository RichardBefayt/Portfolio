/* eslint-disable import/no-anonymous-default-export */

// Images Applications
import appCuisine from '../assets/images/applications/app-cuisine-2.png';
import appToDo from '../assets/images/applications/todo-list-react2.png';

export default [
    {
        title: 'Applications',
        slug: 'applications',
        introduction: 'Applications Web Front-End',
        composition: [
            {
                id: 1,
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
                id: 2,
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
    }
]