import React from 'react';

import './Signin.css';
import LoginForm from "../../components/LoginForm/LoginForm";
import Footer from "../../components/Footer/Footer";
import plLocale from "date-fns/locale/pl";



import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {CSSTransition} from "react-transition-group";
import TextField from "@material-ui/core/TextField";
import {ThemeProvider} from "@material-ui/core/styles";
import DoctorLoginForm from "../../components/DoctorLoginForm/DoctorLoginForm";


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
                        <LoginForm form_type={'single-order-login'}
                                   logInToOrder={this.props.logInToOrder}/>
                        <LoginForm form_type={'register-new-order'}
                                   registerNewClient={this.props.registerNewClient}
                                   loginToAccount={this.props.loginToAccount}/>

                    </MuiPickersUtilsProvider>
                </section>

                <section className={'bottom-section'}>

                    <DoctorLoginForm loginToDoctorAccount={this.props.loginToDoctorAccount}/>

                    <Footer additional_class={'fixed-footer'}/>
                </section>


            </div>
        );
    }
}

export default Signin;
