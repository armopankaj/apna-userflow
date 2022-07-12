import React from 'react'
import { useGlobalContext } from '../context'
import company from '../logos/corporate_fare.svg'
import group from '../logos/Group.svg'
import Radiobtn from './Radiobtn'

const SUBTITLE = ["I’m an owner/employee of a business or a company/enterprise.", "I’m a consultant working for staffing or manpower consultancy."]
const Conditional = () => {
    const { keepChecked, isKeepChecked } = useGlobalContext();
    const handleClick = (e) => {
        isKeepChecked(true);
    }
    return (
        <div className='conditional'>
            <Radiobtn logo={company} title={"My Own Company"} subtitle={SUBTITLE[0]} onClick={handleClick} />
            <Radiobtn logo={group} title={"My Clients"} subtitle={SUBTITLE[1]} onClick={handleClick} />
        </div>
    )
}

export default Conditional
