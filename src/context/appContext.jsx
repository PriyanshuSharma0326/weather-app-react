import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [errorText, setErrorText] = useState('');
    const [celsius, setCelsius] = useState();

    const contextValue = {
        errorText,
        setErrorText,
        celsius,
        setCelsius
    };

    return (
        <AppContext.Provider value={ contextValue }>
            { children }
        </AppContext.Provider>
    )
}
