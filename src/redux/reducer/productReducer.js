const initialState = {
    products: '',
    loading: true,
    error: '',
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_PRODUCTS_REQUEST":
            return {
                ...state,
                loading: true,
                error: ''
            }
        case "FETCH_PRODUCTS_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: ''
            }
        
        default :
            return state;
    }
}