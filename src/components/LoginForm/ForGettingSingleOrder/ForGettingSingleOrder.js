import React, {useState} from "react";

import './ForGettingSingleOrder.css';
import {ThemeProvider} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker} from "@material-ui/pickers";

export default function ForGettingSingleOrder(props) {

    const theme = props.theme;

    return (


        <div className={'login-form-controllers'}>
            <ThemeProvider theme={theme}>
                <TextField
                    margin='normal'
                    onChange={(event) => props.setOrderNo(event.target.value)}
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
                    value={props.selectedDate}
                    InputAdornmentProps={{position: "start"}}
                    onChange={date => props.handleDateChange(date)}
                />
            </ThemeProvider>

            <input type={'submit'} className={'common-btn'} onClick={props.checkResults} value={'Sprawdź wyniki'}/>
            <a className={'check-rules'}>Zapoznaj się z Regulaminem</a>
        </div>


    )


}

