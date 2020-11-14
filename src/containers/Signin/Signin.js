import React from 'react';

import './Signin.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";
import plLocale from "date-fns/locale/pl";


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
                    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={plLocale}>
                        <LoginForm form_type={'single-order-login'} logIn={this.props.logIn}/>
                        <LoginForm form_type={'register-new-order'}/>

                    </MuiPickersUtilsProvider>
                </section>

                <section className={'bottom-section'}>
                    <Footer additional_class={'fixed-footer'}/>

                </section>


            </div>
        );
    }
}

export default Signin;
