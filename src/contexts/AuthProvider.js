import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Firebase
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword  } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";

// Notify function
import { notify } from '../utils/notify';

// create context
export const AuthContext = createContext();


const AuthProvider = ({children}) => {

    const [ currentUser, setCurrentUser ] = useState({});
    const navigate = useNavigate();

    // Sign Up 
    const signUp = ( email, password, userName ) => {
        createUserWithEmailAndPassword(auth, email, password )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                const db = getDatabase();
                set(ref(db, 'users/' + user.uid), {
                    displayName: userName,
                    email: email,
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    photoURL: ''
                });
                notify("حساب کاربری شما با موفقیت ساخته شد!", "success")
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                notify(errorCode, "error")
            });
    }

    // Sign In
    const signIn = ( email, password ) => {
        signInWithEmailAndPassword(auth, email, password )
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                notify("درحال انتقال به حساب کاربری!", "success");
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                notify(errorCode, "error")
            });
    }

    //logged in user
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe;
    },[])

    // Log Out
    const logOut = () => {
        auth.signOut()
        navigate('/')
    }

    // Upload User Data
    


    const value = {
        currentUser,
        signUp,
        signIn,
        logOut,
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;