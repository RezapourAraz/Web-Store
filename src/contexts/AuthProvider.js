import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [ currentUser, setCurrentUser ] = useState({});
    const navigate = useNavigate();
    
    const signUp = ( email, password ) => {
        createUserWithEmailAndPassword(auth, email, password )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/')
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
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe;
    },[])

    const logOut = () => {
        auth.signOut()
        console.log("signout");
    }


    const value = {
        currentUser,
        signUp,
        signIn,
        logOut
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;