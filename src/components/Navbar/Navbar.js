import React from 'react';

import './Navbar.css';
import logo from '../../images/logo.png'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <nav className={'navbar'}>
                <img id='logo' src={logo} alt={'logo'}/>
                <a className={`logout-button ${this.props.page !== 'signIn' ? '' : 'invisible'}`} href='' onClick={this.props.logOut}></a>
            </nav>
        );
    }
}

export default Navbar;
