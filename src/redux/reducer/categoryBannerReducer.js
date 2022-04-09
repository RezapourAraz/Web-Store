const initialState = {
    categoryBanner: '',
    loading: true,
    error: '',
}

export const categoryBannerReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "FETCH_CATE_BANNER_REQUEST":
            return {
                ...state,
                loading: true,
                error: ''
            }
        case "FETCH_CATE_BANNER_SUCCESS":
            return {
                ...state,
                loading: false,
                categoryBanner: action.payload,
                error: ''
            }
        default :
            return state;
    }
}