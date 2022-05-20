import React from 'react'
import linkedin from '../images/linkedin.png'
import mail from '../images/Mail.png'

function Button() {
    return (
        <div className="button">
            <button className='email'><img src={mail} />Email</button>
            <button className='linkedin'><img src={linkedin} />LinkedIn</button>
        </div>
    )
}

export default Button;