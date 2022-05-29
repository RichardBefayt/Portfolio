import curriculumData from "../data/curriculumData";

export const initialState = {
    data: curriculumData,
    isClick: false,
    open: false,
};

const reducer = (state = initialState, action = {}) => {
    // console.log("reducer curriculumData", state);
    switch (action.type) {
        case "TOGGLE_SETTINGS":
            return {
                ...state,
                isClick: !state.isClick,
                open: !state.open,
            }
        default:
            return state;
    }
};

export default reducer;