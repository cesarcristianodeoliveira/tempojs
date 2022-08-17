import React, { createContext, useState, useContext } from 'react';

const Context = createContext();

export const SearchContext = ({ children }) => {  

    const [openSearch, setOpenSearch] = useState(false);
    const handleOpenSearch = () => {
        setOpenSearch(true);
        setTimeout(() => {
            document.getElementById('input-search').focus()
        }, 150)
    };
    const handleCloseSearch = () => {
        setOpenSearch(false);
    };

    return (
        <Context.Provider
        value={{
            openSearch,
            handleOpenSearch,
            handleCloseSearch
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useSearchContext = () => useContext(Context);