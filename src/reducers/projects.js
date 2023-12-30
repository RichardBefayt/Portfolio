// import projectsData from '../data/projectsData';
import websitesData from "../data/websitesData";
import gamesData from "../data/gamesData";

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