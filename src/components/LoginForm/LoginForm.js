import React, {useState} from "react";
import {KeyboardDatePicker} from "@material-ui/pickers";

import './LoginForm.css';

import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core';

import {
    ThemeProvider
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


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

const formatDate = (date) => {

    const addZeroesIfNecessery = (parts_of_date) => {
        const isZeroNecessery = (num) => {
            if (num.length < 2) return true
            else return false
        }

        let day = parts_of_date[1];
        let month = parts_of_date[0];
        let year = parts_of_date[2]

        if (isZeroNecessery(day)) day = `0${day}`
        if (isZeroNecessery(month)) month = `0${month}`

        return `${day}-${month}-${year}`
    }

    const parts_of_date = date.toLocaleDateString("en-US").split("/");

    return addZeroesIfNecessery(parts_of_date)

}


export default function LoginForm(props) {

    const [selectedDate, handleDateChange] = useState(new Date('02-18-1993'));
    const [orderNo, setOrderNo] = useState('');

    const checkResults = () => {
        const birthday_date = formatDate(selectedDate);
        props.logIn(orderNo, birthday_date);
    }

    if (props.form_type === 'single-order-login') {
        return (
            <div className={'login-form'}>
                <div className={'form-image single-order-image'}></div>
                <p className="login-form__headline">Pojedyncze zlecenie</p>
                <div className="login-form__description">
                    Wprowadź numer zlecenia oraz datę urodzenia pacjenta, aby otrzymać dostęp do wyników badań.<br/>

                    <div className="tooltip">
                        Czym jest numer zlecenia?
                        <span className="tooltiptext">Numer zlecenia jest to numer znajdujący
                            się w prawym górnym rogu dokumentu otrzymanego w punkcie pobrań.</span>
                    </div>

                </div>

                <div className={'login-form-controllers'}>
                    <ThemeProvider theme={theme}>
                        <TextField
                            margin='normal'
                            onChange={(event) => setOrderNo(event.target.value)}
                            id="order_number_field"
                            label="Numer zlecenia"
                            variant="outlined"
                            color="primary"
                            margin='dense'
                            fullWidth={true}
                            inputProps={{maxLength: 10}}
                        />

                        <KeyboardDatePicker
                            defaultValue="2017-05-24"
                            openTo={'year'}
                            margin='normal'
                            fullWidth={true}
                            autoOk
                            color="primary"
                            margin='dense'
                            rifmFormatter="dd/MM/yyyy"
                            variant="inline"
                            placeholder="dd/MM/yyyy"
                            inputVariant="outlined"
                            label="Data urodzenia"
                            format="dd/MM/yyyy"
                            value={selectedDate}
                            InputAdornmentProps={{position: "start"}}
                            onChange={date => handleDateChange(date)}
                        />
                    </ThemeProvider>

                    <a className={'common-btn'} href={"#"} onClick={checkResults}>Sprawdź wyniki</a>
                    <a className={'check-rules'}>Zapoznaj się z Regulaminem</a>
                </div>


            </div>
        )

    } else if (props.form_type === 'register-new-order') {
        return (
            <div className={'login-form'}>
                <div className={'form-image register-new-order-image'}></div>
                <p className="login-form__headline">Zarejestruj nowe zlecenie</p>
                <p className="login-form__description">
                    Wprowadź numer zlecenia oraz datę urodzenia pacjenta, aby otrzymać dostęp do wyników badań.


                </p>

                {/*<input type="text" id="order-number" placeholder=" " maxLength="10"/>*/}


            </div>
        )
    }


}

