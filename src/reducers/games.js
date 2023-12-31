import gamesData from "../data/gamesData";

export const initialState = {
    gamesData: gamesData[0],
};

const gamesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default gamesReducer;