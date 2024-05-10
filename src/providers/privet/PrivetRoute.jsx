import React, { useContext } from 'react';
import { userDataContext } from '../userAuthProvider/UserAuthProvider';
import Login from '../../pages/login/Login';

const PrivetRoute = ({children}) => {
    const {currentUser} = useContext(userDataContext);

    if(currentUser.email){
        return children;
    }
    else{
        return <Login/>
    }
};

export default PrivetRoute;