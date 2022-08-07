import allLanguage from "../data/languages/allLanguageData.js";

export const initialState = {
    allLanguage,
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