import React from 'react'
import { useGlobalContext } from '../context'
import company from '../logos/corporate_fare.svg'
import group from '../logos/Group.svg'
const Radiobtn = ({ logo, title, subtitle }) => {
    const { selected, setSelected, setCompanyName, setClientsName, setconsultancyName, website, setWebsite } = useGlobalContext();
    const handleClick = (e) => {
        // id is changed i.e radio button is changed the previous fields are
        //made empty
        if (e.target.id === "My Own Company") {
            setClientsName("")
            setconsultancyName("")
            setWebsite("")

        } else if (e.target.id === "My Clients") {
            setCompanyName("")
            setWebsite("")
            console.log('sdasd')


        }
        //updating the selected id with the respective value
        setSelected(e.target.id);
        console.log(selected, 'this is radio value');
    }

    return (

        <div className='card' >
            <div className='card-content'>
                <label className='big' onClick={handleClick}>
                    <input type="radio" name="hiring" id={title} />
                    <div className='card-detail'>
                        <div className="logo-detail">
                            <img src={logo} alt="logo" id={title} />
                            <p>{title}</p>
                        </div>
                        {/* <div className='logo-title'>
                            </div> */}

                        <p className='logo-subtitle'>{subtitle}</p>

                    </div>
                </label>

            </div>


        </div >
    )
}

export default Radiobtn
