import React, { createContext } from 'react';

export const AuthContext = createContext(null);
const AuthProviders = ({ children }) => {
    const createUser = (email, password) => {
        
    }
    const conValue = 'HI'
    return (
        <AuthContext.Provider value={conValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;