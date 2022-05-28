import curriculumData from "../data/curriculumData";

export const initialState = {
    data: curriculumData,
    isClick: false,
};

const reducer = (state = initialState, action = {}) => {
    // console.log("reducer curriculumData", state);
    // Dans 1 reducer combiné, on a uniquement accès qu'à sa tranche de state.
    switch (action.type) {
        case "TOGGLE_SETTINGS":
            return {
                ...state,
                isClick: !state.isClick,
            }
        default:
            return state;
    }
};

export default reducer;