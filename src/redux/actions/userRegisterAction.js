import { auth, database } from "../../firebase";

import { createUserWithEmailAndPassword  } from "firebase/auth";
import { set, ref } from "firebase/database";

const userRegisterRequest = () => {
    return {
        type: "USER_REGISTER_REQUEST",
    }
}

const userRegisterSuccess = (user) => {
    return {
        type: "USER_REGISTER_SUCCESS",
        payload: user
    }
}

const userRegisterError = (errorCode) => {
    return {
        type: "USER_REGISTER_ERROR",
        payload: errorCode
    }
}

const userRegister = (email, password, userName) => async (dispatch) => {
    dispatch(userRegisterRequest())
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        set(ref(database, 'users/' + user.uid), {
            username: userName,
            email: email,
            firstName: '',
            lastName: '',
            phoneNumber: '',
        });
        dispatch(userRegisterSuccess(user))
        })
        .catch((error) => {
            const errorCode = error.code;
            dispatch(userRegisterError(errorCode))
        });
}

export default userRegister;