import React from 'react'
import company from '../logos/corporate_fare.svg'
import group from '../logos/Group.svg'
import Radiobtn from './Radiobtn'

const SUBTITLE = ["I’m an owner/employee of a business or a company/enterprise.", "I’m a consultant working for staffing or manpower consultancy."]
const Conditional = () => {
    return (
        <div className='conditional'>
            <Radiobtn logo={company} title={"My Own Company"} subtitle={SUBTITLE[0]} />
            <Radiobtn logo={group} title={"My Clients"} subtitle={SUBTITLE[1]} />
        </div>
    )
}

export default Conditional
