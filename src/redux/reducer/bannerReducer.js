const initialState = {
    banner: '',
    loading: true,
    error: '',
}

export const bannerReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "FETCH_BANNER_REQUEST":
            return {
                ...state,
                loading: true,
                error: ''
            }
        case "FETCH_BANNER_SUCCESS":
            return {
                ...state,
                loading: false,
                banner: action.payload,
                error: ''
            }
        default :
            return state;
    }
}