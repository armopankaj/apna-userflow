import React, { useContext, useState } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [page, setPage] = useState(0);
    const [home, ishome] = useState(true);

    return (<AppContext.Provider value={page}>
        {children}
    </AppContext.Provider>);
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
