import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../utils/firebase/firebase.config';

//-------------Context hare-------------------

export const userDataContext = createContext(null);


//-----------------------social provider hare--------------------
const googleProvider = new GoogleAuthProvider();


const UserAuthProvider = ({ children }) => {

    //-------------------------Necessary State hare-----------------------------
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);

    //--------------Login with email and password -----------
    const signUnWithPassword = (email,password)=>{
        setLoading(true);

        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    //---------------Log out user------------
    const logOutUser = ()=>{
        setLoading(true);
        return signOut(auth)
    }

    //---------------------------Login with google -------------------
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    //----------------------Observe user ------------------
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            if (user){
                setCurrentUser(user);
            }
            else{
                setCurrentUser([]);
            }
        })

        setLoading(false);
    },[loading])


    //---------------------Provider Value-------------------
    const userInfo = {
        loginWithGoogle,
        currentUser,
        logOutUser,
        loading,
        signUnWithPassword,
        setLoading
    }
    return (
        <userDataContext.Provider value={userInfo}>
            {children}
        </userDataContext.Provider>
    );
};

export default UserAuthProvider;