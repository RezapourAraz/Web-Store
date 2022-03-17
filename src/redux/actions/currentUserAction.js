import { auth } from "../../firebase";
import { database } from "../../firebase";
import { ref, child, get } from "firebase/database";

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
const fetchUserData = (user) => {
    return {
        type: "FETCH_USER_DATA",
        payload: user
    }
}

export const loggedInUser = () => async (dispatch) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        dispatch(fetchLoggedInUser(user))
        dispatch(getUserData(user))
    })
    return unsubscribe;
}


export const logOutUser = () => async (dispatch) => {
    auth.signOut()
    dispatch(fetchLogOutUser())
}


export const getUserData = (user) => async (dispatch) => {
    const dbRef = ref(database);
    get(child(dbRef, `users/${user.uid}`)).then((snapshot) => {
        if (snapshot.exists()) {
            dispatch(fetchUserData(snapshot.val()))
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });
}