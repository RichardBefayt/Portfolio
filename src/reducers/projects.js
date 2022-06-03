import websitesData from "../data/websites";
import gamesData from "../data/games";

export const initialState = {
    websitesData: websitesData,
    gamesData: gamesData,
};
console.log("websitesData", websitesData);

const reducer = (state = initialState, action = {}) => {
    console.log("state", state);
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;