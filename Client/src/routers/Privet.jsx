import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { FadeLoader } from 'react-spinners';

const Privet = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    let location = useLocation(); 
    // console.log(location)
    if (user) {
        return children;
    }
    if (loader) {
        return <div className="h-screen flex justify-center items-center">
            <FadeLoader color="#36d7b7" />
        </div>
    }
    return <Navigate to={'/login'} replace state={{from : location.pathname}} />;
};

export default Privet;