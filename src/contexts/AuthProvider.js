import React, { createContext, useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [ currentUser, setCurrentUser ] = useState({});
    
    const signUp = ( email, password ) => {
        createUserWithEmailAndPassword(auth, email, password )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setCurrentUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const signIn = ( email, password ) => {
        signInWithEmailAndPassword(auth, email, password )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setCurrentUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    const value = {
        currentUser,
        signUp,
        signIn
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;