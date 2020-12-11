import React, {useState} from "react";

import './ForNewOrder.css';
import {ThemeProvider, unstable_createMuiStrictModeTheme as createMuiTheme} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {KeyboardDatePicker} from "@material-ui/pickers";


export default function ForNewOrder(props) {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [pesel, setPesel] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState(new Date('01-01-1960'));


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

    return (
        <div className={`new-order-container login-form-controllers`}>
            <ThemeProvider theme={theme}>
                <TextField
                    margin='normal'
                    onChange={(event) => setName(event.target.value)}
                    id="newOrder_name_field"
                    label="Imię"
                    variant="outlined"
                    color="primary"
                    margin='dense'
                    fullWidth={true}
                />

                <TextField
                    margin='normal'
                    onChange={(event) => setSurname(event.target.value)}
                    id="newOrder_surname_field"
                    label="Nazwisko"
                    variant="outlined"
                    color="primary"
                    margin='dense'
                    fullWidth={true}
                />

                <TextField
                    margin='normal'
                    onChange={(event) => setPesel(event.target.value)}
                    id="newOrder_pesel_field"
                    label="PESEL"
                    variant="outlined"
                    color="primary"
                    margin='dense'
                    fullWidth={true}
                />

                <TextField
                    margin='normal'
                    onChange={(event) => setEmail(event.target.value)}
                    id="newOrder_email_field"
                    label="Adres e-mail"
                    type="email"
                    variant="outlined"
                    color="primary"
                    margin='dense'
                    fullWidth={true}
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
                    value={birthday}
                    InputAdornmentProps={{position: "start"}}
                    onChange={date => setBirthday(date)}
                />


            </ThemeProvider>

            <input type={'submit'} className={'common-btn'} onClick={() => props.createNewOrder(name, surname, pesel, email, birthday)}
                   value={'Wyślij'}/>


        </div>


    )


}

