import { combineReducers } from 'redux';

import curriculumReducer from './curriculum';
import applicationsReducer from './applications';
import websitesReducer from './websites';
import gamesReducer from './games';

// import projectsReducer from './projects';
// import skillsReducer from './skills';

// Ici on donne les "tranches" qui seront combinées pour former le reducer principal
const rootReducer = combineReducers({
    curriculum: curriculumReducer, // On accède à cette tranche du state par state.curriculum
    applications: applicationsReducer, // On accède à cette tranche du state par state.applications
    websites: websitesReducer, // On accède à cette tranche du state par state.websites
    games: gamesReducer, // On accède à cette tranche du state par state.games
    
    // projects: projectsReducer, // On accède à cette tranche du state par state.projects
    // skills: skillsReducer, // On accède à cette tranche du state par state.skills
});

export default rootReducer;