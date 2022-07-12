import React from 'react'
import { useGlobalContext } from '../context';
const Button = () => {
    const { page, setPage, isDisabled } = useGlobalContext();
    return (
        <>
            <button className='footer-button' onClick={() => { setPage((prev) => prev + 1) }} disabled={isDisabled}>
                <span>Continue</span>
            </button>
        </>
    )
}

export default Button
