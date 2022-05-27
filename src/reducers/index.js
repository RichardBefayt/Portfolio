import { combineReducers } from 'redux';

import projectsReducer from './projects';
import curriculumReducer from './curriculum';

// Ici on donne les "tranches" qui seront combinées pour former le reducer principal
const rootReducer = combineReducers({
    projects: projectsReducer, // On accède à cette tranche du state par state.recipes
    curriculum: curriculumReducer, // On accède à cette tranche du state par state.user
});

export default rootReducer;