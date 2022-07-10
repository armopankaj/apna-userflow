import React from 'react'
import Inputcomp from './Inputcomp'
const Company = () => {
    return (
        <div className='company'>
            <Inputcomp label={"Your company name"} placeholder={"Example: apna"} />
            <Inputcomp label={"Company Website"} placeholder={"Example: www.companyname.com"} />
        </div>
    )
}

export default Company
