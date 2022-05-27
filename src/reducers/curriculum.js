import curriculumData from "../data/curriculumData";

export const initialState = {
    data: curriculumData,
};

const reducer = (state = initialState, action = {}) => {
    // console.log("reducer curriculumData", state);
    // Dans 1 reducer combiné, on a uniquement accès qu'à sa tranche de state.
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;