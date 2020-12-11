import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import DocPic from "../../images/doctor_icon_134842.png"
import './DoctorLoginForm.css'
import {ThemeProvider, withStyles, unstable_createMuiStrictModeTheme as createMuiTheme} from "@material-ui/core/styles";


export default function DoctorLoginForm(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const theme2 = createMuiTheme({
        palette: {
            primary: {
                main: '#fd5724',
            },
            secondary: {
                main: '#f44336',
            },
        },
    });

    return (
        <div className={'doctor-link-content'}>
            <img id={'doc-img'} src={DocPic} alt={'doc'} />
            <div className={'doctor-link-strings'}>
                <div className={'doctor-link-title'}>
                    <p className={'doctor-link-headline'}>Dla współpracujących lekarzy</p>
                    <p className={'doctor-link-description'}>Sprawdź wyniki badań swoich pacjentów</p>
                </div>
                <div className={"doctor-link-form"}>

                    <ThemeProvider theme={theme2}>
                        <TextField
                            margin='normal'
                            onChange={(event) => setEmail(event.target.value)}
                            id="doctor_email_field"
                            label="Adres e-mail"
                            type={'email'}
                            variant="outlined"
                            color="primary"
                            margin='dense'
                            fullWidth={true}
                        />

                        <TextField
                            margin='normal'
                            onChange={(event) => setPassword(event.target.value)}
                            id="doctor_password_field"
                            label="Hasło"
                            type={'password'}
                            variant="outlined"
                            color="primary"
                            margin='dense'
                            fullWidth={true}
                        />

                    </ThemeProvider>


                    <input type={'submit'} className={'doctor-login-btn'} onClick={() => props.loginToDoctorAccount(email, password)} value={'Sprawdź wyniki'}/>
                </div>
            </div>
        </div>
    )
}