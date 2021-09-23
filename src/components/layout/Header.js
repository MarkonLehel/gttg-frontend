import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    return (
        <div id="header">
            <Link to="/" >Home</Link>
            <Link to="/top-five" >Top5</Link>
            <Link to="about" >About</Link>
        </div>
    )
}

export default Header;