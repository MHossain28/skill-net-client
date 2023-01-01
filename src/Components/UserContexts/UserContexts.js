import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, signInWithEmailAndPassword, sendEmailVerification, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContexts = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user create 
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // LogIn With Google 
    const providerLogin = (provider)=>{
        return signInWithPopup(auth, provider)
    }

    // log In 
    const emailLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // email varify
    const verifyEmail = ()=>{
        return sendEmailVerification(auth.currentUser)
    }

    // Profile Update 
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    // Log Out 
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    // Current User 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            // if(loggedUser == null || loggedUser.emailVerified){
            //     setUser(loggedUser);
            //     setLoading(false)
            // }

            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

    const authInfo = { user, loading, createUser, providerLogin, verifyEmail, updateUserProfile, emailLogin, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;