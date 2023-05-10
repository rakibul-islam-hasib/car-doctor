import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from '../firebase/firebase.init';

export const AuthProvider = createContext(); 
const auth = getAuth(app); 
const AuthContext = ({ children }) => {
    const [loader, setLoader] = useState(true);
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password); 
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
                setLoader(false);
                setUser(user);
        });
        return unsubscribe();
    }, []);

    const value = { user, createUser , loader };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;