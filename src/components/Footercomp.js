import React from 'react'

const Footercomp = () => {
    return (
        <div className='footer-comp'>
            <label>Number of employees in your company</label>
            <div className="num-btn">
                <button>1-10</button>
                <button>10-50</button>
                <button>50-200</button>
                <button>200-500</button>
                <button>500+</button>
            </div>


        </div>
    )
}

export default Footercomp
