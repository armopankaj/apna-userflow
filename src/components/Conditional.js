import React from 'react'
import { useGlobalContext } from '../context'
import company from '../logos/corporate_fare.svg'
import group from '../logos/Group.svg'
import Radiobtn from './Radiobtn'

const Conditional = () => {
    const { selected, setSelected } = useGlobalContext();

    const data = [
        {
            id: 1,
            logo: company,
            title: "My Own Company",
            subtitle: "I’m an owner/employee of a business or a company/enterprise."
        },
        {
            id: 2,
            logo: group,
            title: "My Clients",
            subtitle: "I’m a consultant working for staffing or manpower consultancy."
        }
    ]

    const handleClick = (obj) => {
        setSelected(obj.id)

    }
    return (
        <div className='conditional'>
            {data.map((obj) => {
                return (
                    <Radiobtn key={obj.id} obj={obj} handleClick={handleClick} />
                )
            })}
        </div>
    )
}

export default Conditional
