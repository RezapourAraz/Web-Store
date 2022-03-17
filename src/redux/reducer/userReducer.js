const initialState = {
    user: '',
    userInfo: '',
    error: '',
    loading: false
}

export const userRducer = (state = initialState , action) => {
    switch (action.type) {
        case "USER_REGISTER_REQUEST": 
            return {
                ...state,
                user: '',
                error: '',
                loading: true
            }
        case "USER_REGISTER_SUCCESS":
            return {
                ...state,
                loading: false,
                error: ''
            }
        case "USER_REGISTER_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "USER_LOGIN_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "USER_LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
            }
        case "USER_LOGIN_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case "FETCH_LOGGED_IN_USER":
            return {
                user: action.payload,
                loading: false,
            }
        case "FETCH_LOG_OUT_USER":
            return {
                user: '',
                loading: false,
                error: ''
            }
        case "FETCH_USER_DATA":
            return {
                ...state,
                userInfo: action.payload
            }
        case "UPDATE_USER_INFO":
            return {
                ...state
            }
        case "UPDATE_PROFILE_IMAGE":
            return {
                ...state
            }
        default:
            return state;
    }
}
