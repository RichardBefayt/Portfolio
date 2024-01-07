import { FETCH_CV_DATA_SUCCESS } from '../actions/actions';

export const initialState = {
    cvData: [],
    isClick: false,
    open: false,
};

const curriculumReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_CV_DATA_SUCCESS:
            return {
                ...state,
                cvData: action.payload,
            };
        case "TOGGLE_SETTINGS":
            return {
                ...state,
                open: !state.open,
                isClick: !state.isClick,
            };
        default:
            return state;
    }
};

export default curriculumReducer;