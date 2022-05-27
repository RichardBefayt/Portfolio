import projectsData from "../data/projectsData";

export const initialState = {
    data: projectsData,
};

console.log("initialState", initialState);
console.log("data", initialState.data);

const reducer = (state = initialState, action = {}) => {
    console.log("reducer", reducer);
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;