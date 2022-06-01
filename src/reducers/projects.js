import websitesData from "../data/projectsData";
import gamesData from "../data/projectsData";

export const initialState = {
    websitesData,
    gamesData: gamesData,

};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;