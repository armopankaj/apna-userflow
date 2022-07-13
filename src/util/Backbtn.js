import React from 'react'
import { useGlobalContext } from '../context'
import arrow from '../logos/chevron_left.svg'
const Backbtn = () => {
    const { setPage } = useGlobalContext();
    const handleBackbtn = (e) => {
        e.stopPropagation();
        setPage(1);
    }
    return (
        <div onClick={handleBackbtn} className="back-btn">
            <img src={arrow} alt="Back" />
            <span>Back</span>


        </div>
    )
}

export default Backbtn
