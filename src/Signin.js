import React from 'react';

import './Signin.css';
import LoginForm from "./LoginForm";

import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="login-page">
                <section className={'signin-container'}>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <LoginForm form_type={'single-order-login'}/>
                        <LoginForm form_type={'register-new-order'}/>

                    </MuiPickersUtilsProvider>


                </section>

                <section className={'bottom-section'}>

                </section>

                <footer className={'footer'}>
                    <div className={'footer-content'}>
                        <div className={'footer-copyright'}>
                            © 2020 COVID-LAB Sp. z o.o.
                        </div>
                        <ul className={'footer-links'}>

                            <li className={'footer-links-item'}>
                                <a href={'https://www.onet.pl'}> Newsletter </a>
                            </li>

                            <li className={'footer-links-item'}>
                                <a href={'https://www.onet.pl'}> Regulamin </a>
                            </li>

                            <li className={'footer-links-item'}>
                                <a href={'https://www.onet.pl'}> Pomoc </a>
                            </li>

                        </ul>
                    </div>

                </footer>
            </div>
        );
    }
}

export default Signin;
