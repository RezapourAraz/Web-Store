import { auth } from "../../firebase";

const fetchLoggedInUser = (user) => {
    return {
        type: "FETCH_LOGGED_IN_USER",
        payload: user,
    }
}

const fetchLogOutUser = () => {
    return {
        type: "FETCH_LOG_OUT_USER",
    }
}

export const loggedInUser = () => async (dispatch) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        dispatch(fetchLoggedInUser(user))
    })
    return unsubscribe;
}

export const logOutUser = () => async (dispatch) => {
    auth.signOut()
    dispatch(fetchLogOutUser())
}