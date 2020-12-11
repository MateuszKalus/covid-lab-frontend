import React, {useState} from "react";

import './ForRegister.css';
import {ThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#fd5724',
        },
        secondary: {
            main: '#f44336',
        },
    },
});

export default function ForRegister(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');


    return (
            <div className={`${props.classNames} login-form-controllers`}>
                <ThemeProvider theme={theme}>
                    <TextField
                        margin='normal'
                        onChange={(event) => setName(event.target.value)}
                        id="reg_name_field"
                        label="Nazwa użytkownika"
                        variant="outlined"
                        color="primary"
                        margin='dense'
                        fullWidth={true}
                    />

                    <TextField
                        margin='normal'
                        onChange={(event) => setEmail(event.target.value)}
                        id="reg_email_field"
                        label="Adres e-mail"
                        variant="outlined"
                        color="primary"
                        margin='dense'
                        fullWidth={true}
                    />

                    <TextField
                        margin='normal'
                        onChange={(event) => setPassword(event.target.value)}
                        id="reg_passwod_field"
                        label="Hasło"
                        type="password"
                        variant="outlined"
                        color="primary"
                        margin='dense'
                        fullWidth={true}
                    />

                    <TextField
                        margin='normal'
                        onChange={(event) => setPhone(event.target.value)}
                        id="reg_phone_field"
                        label="Telefon"
                        variant="outlined"
                        color="primary"
                        margin='dense'
                        fullWidth={true}
                    />
                </ThemeProvider>

                <input type={'submit'} className={'common-btn'} onClick={() => props.registerNewClient(name, email, password, phone)} value={'Zarejestruj'}/>

                <a className={'check-rules'} onClick={() => props.changePageFor('login')}  > Masz już konto? Zaloguj się. </a>

            </div>



    )


}

