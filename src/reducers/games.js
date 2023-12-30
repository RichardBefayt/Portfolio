import gamesData from "../data/gamesData";

export const initialState = {
    gamesData,
};

const gamesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default gamesReducer;