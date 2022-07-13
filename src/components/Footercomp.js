import React from 'react'
import { useGlobalContext } from '../context';

const Footercomp = () => {
    const { employeeNum, setEmployeeNum } = useGlobalContext();

    const sizelist = [
        {
            id: 1,
            size: "1-10"
        },
        {
            id: 2,
            size: "10-50"
        },
        {
            id: 3,
            size: "50-200"
        }, {
            id: 4,
            size: "200-500"
        }, {
            id: 5,
            size: "500+"
        }
    ]


    return (
        <div className='footer-comp'>
            <label>Number of employees in your company</label>
            <div className="sizebuttons">
                {sizelist.map((ele) => {
                    return (<button
                        key={ele.id}
                        value={ele.size}
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            // console.log('this is the item', ele.size)
                            setEmployeeNum(e.target.value);

                        }}
                        className={`button${employeeNum === ele.size ? "active" : ""}`}>
                        {ele.size}
                    </button>)
                })}
            </div>


        </div>
    )
}

export default Footercomp
