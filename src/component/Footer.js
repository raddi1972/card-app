import React from 'react'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import github from '../images/github.png'

function Footer() {
    return(
        <footer>
            <img src={twitter} alt="twitter" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={github} alt="github" />
        </footer>
    );
}

export default Footer;