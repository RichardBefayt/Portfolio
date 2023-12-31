import websitesData from "../data/websitesData";

export const initialState = {
    websitesData: websitesData[0],
};

const websitesReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default websitesReducer;