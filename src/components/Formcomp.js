import React from 'react'
import Conditional from './Conditional'
import Inputcomp from './Inputcomp'
import { useGlobalContext } from '../context'
import Clientcompany from './Clientcompany'
import Footercomp from './Footercomp'
import ThankYou from '../ThankYou'


const Formcomp = () => {
    const { page, selected, userName, setUserName } = useGlobalContext();
    return (
        <form className='form-comp'>
            {page === 1 && (<Inputcomp value={userName} setValue={setUserName} label={"What's Your Full Name?"} placeholder={"Your Name"} />)}
            {page === 2 && (
                <>
                    <Conditional />
                    {selected && <> <Clientcompany />
                        <Footercomp />
                    </>
                    }
                </>
            )}
            {page > 2 && <ThankYou />}

        </form>
    )
}

export default Formcomp
