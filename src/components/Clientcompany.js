import React from 'react'
import { useGlobalContext } from '../context'
import Inputcomp from './Inputcomp';

const Clientcompany = () => {
    const { selected, companyName, setCompanyName, clientsName, setClientsName, consultancyName, setconsultancyName, website, setWebsite } = useGlobalContext();
    return (
        <>
            {selected === "My Own Company" && (
                <>
                    <Inputcomp
                        label={"Your company name"}
                        placeholder={"Example: apna"}
                        value={companyName}
                        setValue={setCompanyName} />
                    <Inputcomp
                        label={"Company Website"}
                        placeholder={"Example: www.companyname.com"}
                        value={website}
                        setValue={setWebsite} />
                </>

            )}
            {selected === "My Clients" && (
                <>
                    <Inputcomp
                        label={"Clients you normally hire for"}
                        placeholder={"Example: Swiggy, Zomato, Flipkart"}
                        value={clientsName}
                        setValue={setClientsName} />
                    <Inputcomp
                        label={"Your consultancy name"}
                        placeholder={"Example: Abc consultancy"}
                        value={consultancyName}
                        setValue={setconsultancyName} />
                    <Inputcomp
                        label={"Consultancy website"}
                        placeholder={"Example: www.abc.com "}
                        value={website}
                        setValue={setWebsite} />
                </>
            )}
        </>
    )
}

export default Clientcompany
