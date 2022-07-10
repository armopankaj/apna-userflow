import React from 'react'
import company from '../logos/corporate_fare.svg'
import group from '../logos/Group.svg'
const Radiobtn = ({ logo, title, subtitle }) => {
    return (
        <div className='radio-btn'>
            <div className='tile'>
                <div className='tile-content'>
                    <input type="radio" name="hiriingfor" id="" />
                    <div className='radio-detail'>
                        <div className="icon">
                            <img src={logo} alt="logo" />
                            <div className='icon-new'></div>
                            <p>{title}</p>
                        </div>
                        <p className='icon-des'>{subtitle}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Radiobtn
