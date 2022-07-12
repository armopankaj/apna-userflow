import React, { useState } from 'react'

import Inputcomp from './Inputcomp';
import Head from './Head';
import ApnaLogo from './ApnaLogo';
import Formcomp from './Formcomp';
import Footercomp from './Footercomp'
import { useGlobalContext } from '../context';
import Button from './Button';
import Backbtn from './Backbtn';

const Form = () => {
    const { page } = useGlobalContext();




    return (
        <>

            <div className='main-container'>
                {page === 2 && <Backbtn />}
                <div className='header-container'>
                    <ApnaLogo />
                    <div className='header-txt'>
                        <Head />
                    </div>
                </div>
                <div className='body'>
                    <Formcomp />
                </div>
                <div className='footer'>
                    {page <= 2 && <Button />}
                </div>
            </div>


        </>


    )
}

export default Form
