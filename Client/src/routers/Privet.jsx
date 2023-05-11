import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProviders';
import { Navigate } from 'react-router-dom';

const Privet = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return children;
    }
    return <Navigate to={'/'} replace/>;
};

export default Privet;