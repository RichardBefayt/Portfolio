import applicationsData from "../data/applicationsData";

export const initialState = {
    applicationsData: applicationsData[0],
};

const applicationsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default applicationsReducer;