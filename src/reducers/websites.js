import websitesData from "../data/websitesData";

export const initialState = {
    websitesData,
};

const websitesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default websitesReducer;