export const initialState = {
    categories: [],
    modules: []
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CATEGORIES': 
            return {
                ...state,
                categories: action.payload
            }
        case 'SET_MODULES':
            return {
                ...state,
                modules: action.payload
            }
        default:
            return state;
    }
}

export default reducer;