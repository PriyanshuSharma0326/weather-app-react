import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [errorText, setErrorText] = useState('');

    const contextValue = {
        errorText,
        setErrorText,
    };

    return (
        <AppContext.Provider value={ contextValue }>
            { children }
        </AppContext.Provider>
    )
}
