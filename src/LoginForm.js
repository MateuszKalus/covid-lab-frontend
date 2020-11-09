
import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

import './LoginForm.css';

import {
    ThemeProvider,
    createMuiTheme
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { orange } from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: orange,
    },
});

export default function LoginForm(props) {

    const [selectedDate, handleDateChange] = useState(new Date(null));


    if (props.form_type === 'single-order-login') {
        return (
            <div className={'login-form'}>
                <div className={'form-image single-order-image'}></div>
                <p className="login-form__headline">Pojedyncze zlecenie</p>
                <p className="login-form__description">
                    Wprowadź numer zlecenia oraz datę urodzenia pacjenta, aby otrzymać dostęp do wyników badań.

                    <div className="tooltip">
                        Czym jest numer zlecenia?
                        <span className="tooltiptext">Numer zlecenia jest to numer znajdujący
                            się w prawym górnym rogu dokumentu otrzymanego w punkcie pobrań.</span>
                    </div>

                </p>

                <ThemeProvider theme={theme}>
                    <TextField
                        margin='normal'

                        id="numer_zlecenia"
                        label="Numer zlecenia"
                        variant="outlined"
                        color="primary"
                        margin='dense'
                        fullWidth={true}
                        inputProps={{maxLength: 10}}
                    />

                    <Fragment>

                        <KeyboardDatePicker
                            margin='normal'
                            fullWidth={true}
                            autoOk
                            color="primary"
                            margin='dense'
                            variant="inline"
                            placeholder="dd/MM/yyyy"
                            inputVariant="outlined"
                            label="Data urodzenia"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            InputAdornmentProps={{position: "start"}}
                            onChange={date => handleDateChange(date)}
                        />
                    </Fragment>

                </ThemeProvider>

            <a className={'check-results-btn'}>Sprawdź wyniki</a>
            <a className={'check-rules'}>Zapoznaj się z Regulaminem</a>


            </div>
        )

    } else if (props.form_type === 'register-new-order') {
        return (
            <div className={'login-form'}>
                <div className={'form-image register-new-order-image'}></div>
                <p className="login-form__headline">Zarejestruj nowe zlecenie</p>
                <p className="login-form__description">
                    Wprowadź numer zlecenia oraz datę urodzenia pacjenta, aby otrzymać dostęp do wyników badań.

                    <span className="tooltip__target exception">
                            <span className="underline">Czym jest numer zlecenia?</span>
                        </span>
                </p>

                {/*<input type="text" id="order-number" placeholder=" " maxLength="10"/>*/}






            </div>
        )
    }



}

