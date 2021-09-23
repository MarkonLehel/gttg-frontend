import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <div id="footer">
            <h3>Thank you for visiting our page! Have a safe trip!</h3>
            <Link to="about" >About</Link>
        </div>
    )
}

export default Footer;
