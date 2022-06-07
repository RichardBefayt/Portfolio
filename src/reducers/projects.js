// import projectsData from '../data/projectsData';
import websitesData from "../data/websites";
import gamesData from "../data/games";

export const initialState = {
    websitesData,
    gamesData,
};

const projectsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default projectsReducer;