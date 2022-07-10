import React from 'react'
import Inputcomp from './Inputcomp'
const Client = () => {
    return (
        <div className='client'>
            <Inputcomp label={"Clients you normally hire for"} placeholder={"Example: Swiggy, Zomato, Flipkart"} />
            <Inputcomp label={"Your consultancy name"} placeholder={"Example: Abc consultancy"} />
            <Inputcomp label={"Consultancy website"} placeholder={"Example: www.abc.com "} />

        </div>
    )
}

export default Client
