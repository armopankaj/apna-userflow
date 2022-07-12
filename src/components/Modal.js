import React, { Children } from 'react'
import ReactDom from 'react-dom'
import Form from './Form'
import './modal.css'



export default function Modal() {

    //Creating a react portal which renders it separately 
    //ReactDom.createortal()p
    return (


        <div className='background' >
            <div className='Modal'>
                <Form />
            </div>
        </div>


    )
}