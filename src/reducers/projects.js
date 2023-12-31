// import projectsData from '../data/projectsData';
import applicationsData from "../data/applicationsData";
import websitesData from "../data/websitesData";
import gamesData from "../data/gamesData";

export const initialState = {
    applicationsData: applicationsData[0],
    websitesData: websitesData[0],
    gamesData: gamesData[0],
};

const projectsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default projectsReducer;