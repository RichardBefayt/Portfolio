import websitesData from "../data/websites";
import gamesData from "../data/games";

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