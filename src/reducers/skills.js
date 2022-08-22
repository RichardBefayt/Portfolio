import allLanguages from "../data/languages/allLanguagesData.js";

export const initialState = {
    allLanguages,
    open: false,
};

const skillsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case "TOGGLE_OPEN":
            return {
                ...state,
                open: !state.open,
            };
            default:
                return state;
            }
        };
        
export default skillsReducer;