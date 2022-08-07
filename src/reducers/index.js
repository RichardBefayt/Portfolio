import { combineReducers } from 'redux';

import projectsReducer from './projects';
import curriculumReducer from './curriculum';
import skillsReducer from './skills';

// Ici on donne les "tranches" qui seront combinées pour former le reducer principal
const rootReducer = combineReducers({
    projects: projectsReducer, // On accède à cette tranche du state par state.projects
    curriculum: curriculumReducer, // On accède à cette tranche du state par state.curriculum
    skills: skillsReducer, // On accède à cette tranche du state par state.skills
});

export default rootReducer;