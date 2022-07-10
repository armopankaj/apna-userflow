import React, { useState } from 'react'

const Hiring = () => {
    const [company, setCompany] = useState('');
    return (
        <>
            <form>
                <div className='radio-btn'>
                    <div className='company-btn'>
                        <input type="radio" name="typeofcompany" value="own"></input>

                        <div className='radio-btn'>
                            <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6.22222V3.11111C15 1.4 13.65 0 12 0H3C1.35 0 0 1.4 0 3.11111V24.8889C0 26.6 1.35 28 3 28H27C28.65 28 30 26.6 30 24.8889V9.33333C30 7.62222 28.65 6.22222 27 6.22222H15ZM12 24.8889H3V21.7778H12V24.8889ZM12 18.6667H3V15.5556H12V18.6667ZM12 12.4444H3V9.33333H12V12.4444ZM12 6.22222H3V3.11111H12V6.22222ZM27 24.8889H15V9.33333H27V24.8889ZM24 12.4444H18V15.5556H24V12.4444ZM24 18.6667H18V21.7778H24V18.6667Z" fill="#5E6C84"></path></svg>

                            <div className='radio-btn-txt'> My Own Company</div>
                            <div className='radio-btn-txt'> I’m an owner/employee of a business or a company/enterprise</div>
                        </div>
                    </div>
                    <div className='client-btn'>
                        <input type="radio" name="typeofcompany" value="client"></input>

                        <div className='inside-btn'>
                            <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 13.5C27.26 13.5 30.14 14.28 32.48 15.3C34.64 16.26 36 18.42 36 20.76V22C36 23.1 35.1 24 34 24H14C12.9 24 12 23.1 12 22V20.78C12 18.42 13.36 16.26 15.52 15.32C17.86 14.28 20.74 13.5 24 13.5ZM8 14C10.2 14 12 12.2 12 10C12 7.8 10.2 6 8 6C5.8 6 4 7.8 4 10C4 12.2 5.8 14 8 14ZM10.26 16.2C9.52 16.08 8.78 16 8 16C6.02 16 4.14 16.42 2.44 17.16C0.96 17.8 0 19.24 0 20.86V22C0 23.1 0.9 24 2 24H9V20.78C9 19.12 9.46 17.56 10.26 16.2ZM40 14C42.2 14 44 12.2 44 10C44 7.8 42.2 6 40 6C37.8 6 36 7.8 36 10C36 12.2 37.8 14 40 14ZM48 20.86C48 19.24 47.04 17.8 45.56 17.16C43.86 16.42 41.98 16 40 16C39.22 16 38.48 16.08 37.74 16.2C38.54 17.56 39 19.12 39 20.78V24H46C47.1 24 48 23.1 48 22V20.86ZM24 0C27.32 0 30 2.68 30 6C30 9.32 27.32 12 24 12C20.68 12 18 9.32 18 6C18 2.68 20.68 0 24 0Z" fill="#5E6C84"></path></svg>

                            <div className='radio-btn-txt'> My Own Company</div>
                            <div className='radio-btn-txt'> I’m an owner/employee of a business or a company/enterprise</div>

                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Hiring
