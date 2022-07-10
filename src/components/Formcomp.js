import React from 'react'
import Conditional from './Conditional'
import Inputcomp from './Inputcomp'

const Formcomp = () => {
    const { page, setPage } = useGlobalContext();
    return (
        <>
            if(page===1 && <Inputcomp label={"What is your Full Name?"} placeholder={"Ex : Pankaj Armo"} />)

            <Conditional />
        </>
    )
}

export default Formcomp
