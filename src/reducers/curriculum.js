import curriculumData from "../data/curriculumData";

export const initialState = {
    cvData: curriculumData,
    isClick: false,
    open: false,
};

const curriculumReducer = (state = initialState, action = {}) => {
    switch (action.type) {   
        case "TOGGLE_SETTINGS":
            return {
                ...state,
                open: !state.open,
                isClick: !state.isClick,
            }
        default:
            return state;
    }
};

export default curriculumReducer;