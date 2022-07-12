import React from 'react'
import { useGlobalContext } from '../context';

const Footercomp = () => {
    const { employeeNum, setEmployeeNum } = useGlobalContext();

    const handlebtn = (e) => {
        e.stopPropagation();
        e.preventDefault(e);
        setEmployeeNum(e.target.value);
    }
    return (
        <div className='footer-comp'>
            <label>Number of employees in your company</label>
            <div className="num-btn">
                <button onClick={handlebtn} value="1-10">1-10</button>
                <button onClick={handlebtn} value="10-50">10-50</button>
                <button onClick={handlebtn} value="50-200">50-200</button>
                <button onClick={handlebtn} value="200-500">200-500</button>
                <button onClick={handlebtn} value="500+">500+</button>
            </div>


        </div>
    )
}

export default Footercomp
