import React from 'react'

const Inputcomp = ({ label, placeholder }) => {
    return (
        <>
            <div className='input-field'>
                <label for={label}>{label}</label>
                <input id={label} type='text' placeholder={placeholder}></input>
            </div>
        </>
    )
}

export default Inputcomp
