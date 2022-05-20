import React from 'react'
import myImage from '../images/raddi.jpg'
import Button from './Button'

function Header() {
    return (
        <header>
            {/* <img src={myImage} alt='rudransh' /> */}
            <h1>Rudransh Dixit</h1>
            <h2>Frontend Developer</h2>
            <h3>raddi1972.website</h3>
            <Button />
        </header>
    )
}

export default Header;