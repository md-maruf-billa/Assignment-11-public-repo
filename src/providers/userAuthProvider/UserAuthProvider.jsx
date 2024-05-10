import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
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
                setCurrentUser(null);
            }
        })

        setLoading(false);
    },[loading])


    //---------------------Provider Value-------------------
    const userInfo = {
        loginWithGoogle,
        currentUser,
        logOutUser,
        loading
    }
    return (
        <userDataContext.Provider value={userInfo}>
            {children}
        </userDataContext.Provider>
    );
};

export default UserAuthProvider;