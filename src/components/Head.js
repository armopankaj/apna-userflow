import React from 'react'
import { useGlobalContext } from '../context'

const Head = () => {
    const { page } = useGlobalContext();
    let title, subtitle
    if (page === 1) {
        title = "Welcome !"
        subtitle = "Since this is your first job posting, let’s setup your company account"
    } else if (page == 2) {

        title = "Whom are you hiring for?"
        subtitle = "Choose any option below"

    }
    return (
        <>

            <h2>{title}</h2>
            <p>{subtitle}</p>
        </>
    )
}

export default Head
