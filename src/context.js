import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [page, setPage] = useState(1);
    const [selected, setSelected] = useState(null);
    const [isDisabled, setisDisabled] = useState(true);
    const [keepChecked, isKeepChecked] = useState(false);

    const [userName, setUserName] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [clientsName, setClientsName] = useState("");
    const [consultancyName, setConsultancyName] = useState("");
    const [website, setWebsite] = useState("");
    const [employeeNum, setEmployeeNum] = useState("");

    const inputVal = {
        userName,
        clientsName,
        companyName,
        consultancyName,
        website,
        employeeNum,
    };

    //if the selected radio is My clients

    useEffect(() => {
        if (page === 2 && selected === 1) {
            {
                companyName ? setisDisabled(false) : setisDisabled(true);
            }
        }
    }, [selected, companyName, page]);

    useEffect(() => {
        if (userName && page === 1) {
            setisDisabled(false);
        } else {
            setisDisabled(true);
        }
    }, [userName, page]);
    useEffect(() => {
        //varibale can be used instead of direct string my clients
        // console.log(isDisabled);
        if (page === 2 && selected === 2) {
            {
                clientsName && consultancyName
                    ? setisDisabled(false)
                    : setisDisabled(true);
            }

            // console.log(isDisabled);
        }
    }, [selected, companyName, clientsName, consultancyName, page]);
    useEffect(() => {
        if (page > 2) console.log(inputVal);
    }, [page]);

    return (
        <AppContext.Provider
            value={{
                page,
                setPage,
                selected,
                setSelected,
                isDisabled,
                setisDisabled,
                userName,
                setUserName,

                companyName,
                setCompanyName,
                clientsName,
                setClientsName,
                consultancyName,
                setConsultancyName,
                website,
                setWebsite,
                inputVal,
                employeeNum,
                setEmployeeNum,
                keepChecked,
                isKeepChecked,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
