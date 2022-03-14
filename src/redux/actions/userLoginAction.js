import { auth } from "../../firebase";

import { signInWithEmailAndPassword  } from "firebase/auth";

const userLoginRequest = () => {
    return {
        type: "USER_LOGIN_REQUEST",
    }
}

const userLoginSuccess = (user) => {
    return {
        type: "USER_LOGIN_SUCCESS",
        payload: user
    }
}

const userLoginError = (errorCode) => {
    return {
        type: "USER_LOGIN_ERROR",
        payload: errorCode
    }
}

const userLogin = (email, password) => async (dispatch) => {
    dispatch(userLoginRequest())
    signInWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            dispatch(userLoginSuccess(user))
        })
        .catch((error) => {
            const errorCode = error.code;
            dispatch(userLoginError(errorCode))
        });
}

export default userLogin;