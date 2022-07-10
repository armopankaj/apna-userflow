import React from 'react'

const Welcome = () => {
    return (
        <>
            <form>
                <div className='welcome-input'>
                    <label>What is your Full Name?</label>

                    <input type="text" placeholder='Ex:Pankaj Armo'></input>
                </div>

            </form>
        </>
    )
}

export default Welcome
