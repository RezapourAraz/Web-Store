import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

import { getDatabase, ref, set } from "firebase/database";


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [ currentUser, setCurrentUser ] = useState({});
    const [ errorCode, setErrorCode ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');
    const navigate = useNavigate();
    
    const signUp = ( email, password, userName ) => {
        createUserWithEmailAndPassword(auth, email, password )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const db = getDatabase();
                set(ref(db, 'users/' + user.uid), {
                    username: userName,
                    email: email,
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    profile_picture : ''
                });
                navigate('/')
            })
            .catch((error) => {
                setErrorCode(error.code);
                setErrorMessage(error.message);
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
                setErrorCode(error.code);
                setErrorMessage(error.message);
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
        navigate('/')
    }


    const value = {
        currentUser,
        errorCode,
        errorMessage,
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