import React, {useState} from "react";

import './ForLogin.css';
import {ThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


export default function ForLogin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const theme = props.theme;

    return (
        <div className={`${props.classNames} login-form-controllers`}>
            <ThemeProvider theme={theme}>
                <TextField
                    margin='normal'
                    onChange={(event) => setEmail(event.target.value)}
                    id="log_email_field"
                    label="Adres e-mail"
                    variant="outlined"
                    color="primary"
                    margin='dense'
                    fullWidth={true}
                />

                <TextField
                    margin='normal'
                    onChange={(event) => setPassword(event.target.value)}
                    id="log_password_field"
                    label="Hasło"
                    type="password"
                    variant="outlined"
                    color="primary"
                    margin='dense'
                    fullWidth={true}
                />

            </ThemeProvider>

            <input type={'submit'} className={'common-btn'} onClick={() => props.loginToAccount(email, password)}
                   value={'Zaloguj'}/>

            <a className={'check-rules'} onClick={() => props.changePageFor('register')}> Nie masz konta? Zarejestruj
                się.</a>

        </div>


    )


}

