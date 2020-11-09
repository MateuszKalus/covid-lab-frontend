import React from 'react';

import './Navbar.css';
import logo from './images/logo.png'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <nav className={'navbar'}>
                <img id='logo' src={logo}/>
            </nav>
        );
    }
}

export default Navbar;
