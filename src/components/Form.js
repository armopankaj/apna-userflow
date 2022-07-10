import React, { useState } from 'react'

import Inputcomp from './Inputcomp';
import Head from './Head';
import ApnaLogo from './ApnaLogo';
import Formcomp from './Formcomp';
import Footercomp from './Footercomp'
import { useGlobalContext } from '../context';
import Company from './Company';
import Client from './Client';

const Form = () => {
    const { page, setPage } = useGlobalContext();
    const { page, setPage } = useGlobalContext();
    // const PageDisplay = () => {
    //     if (page === 0) {
    //         return <Welcome />

    //     }
    //     else if (page == 1) {
    //         return <Hiring />
    //     }
    //     else {
    //         return <Final />
    //     }
    // }


    return (
        <>

            <div className='main-container'>
                <div className='header-container'>

                    <ApnaLogo />

                    <div className='header-txt'>
                        <Head title={"Welcome!"} subtitle={"Since this is your first Job posting, let's setup your Company Account"} />
                    </div>
                </div>
                <div className='body'>

                    <Formcomp />

                    <Company />
                    <Client />

                </div>
                <div className='footer'>
                    <Footercomp />
                    <button className='primarybutton' onClick={() => { setPage((currPage) => currPage + 1) }}>  <span>Continue</span></button>
                </div>
            </div>


        </>


    )
}

export default Form
