const initialState = {
    category: '',
}

export const categoryListReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_PRODUCTS_CATEGORY":
            return {
                ...state,
                category: action.payload
            }
        default:
            return state;
    }
}