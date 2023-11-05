import React, {  createContext } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const hello = 'works'

    const authInfo ={hello}

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;