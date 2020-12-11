import React, {useEffect, useState} from "react";


import './LoginForm.css';

import {unstable_createMuiStrictModeTheme as createMuiTheme} from '@material-ui/core';

import {
    ThemeProvider
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import ForRegister from "./ForRegister/ForRegister";
import ForLogin from "./ForLogin/ForLogin";
import ForGettingSingleOrder from "./ForGettingSingleOrder/ForGettingSingleOrder";
import AlertDialog from "../AlertDialog/AlertDialog";


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


    const headlines = {
        login: 'Logowanie',
        register: 'Rejestracja'
    }

    const [selectedDate, handleDateChange] = useState(new Date('02-18-1993'));
    const [orderNo, setOrderNo] = useState('');
    const [page, setPage] = useState('login');


    const checkResults = () => {
        const birthday_date = formatDate(selectedDate);
        props.logInToOrder(orderNo, birthday_date);
    };

    const changePageFor = (page) => {
        if (page === 'login') setPage('login');
        else if (page === 'register') setPage('register');
    };

    const generatePage = () => {
        if (page === 'login') return <ForLogin theme={theme}
                                               classNames={"swing-in-top-fwd"}
                                               changePageFor={changePageFor}
                                               loginToAccount={props.loginToAccount}/>;

        else if (page === 'register') return <ForRegister theme={theme}
                                                          classNames={"swing-in-top-fwd"}
                                                          changePageFor={changePageFor}
                                                          registerNewClient={props.registerNewClient}/>;
    };


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

                <ForGettingSingleOrder theme={theme}
                                       handleDateChange={handleDateChange}
                                       setOrderNo={setOrderNo}
                                       selectedDate={selectedDate}
                                       checkResults={checkResults}/>
            </div>


        )

    } else if (props.form_type === 'register-new-order') {
        return (
            <div className={'login-form'}>
                <div className={'form-image register-new-order-image'}></div>
                <p className="login-form__headline">{headlines[page]}</p>
                <div className="login-form__description">
                    Zaloguj się, aby zarejestrować zlecenie. Jeśli nie masz jeszcze konta, musisz się zarejestrować.
                </div>
                    {generatePage()}

            </div>
        )
    }


}

