import React, { createContext, useContext } from 'react';

const Context = createContext();

export const UserContext = ({ children }) => {  


    
    return (
        <Context.Provider
        value={{

        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useUserContext = () => useContext(Context);