import React from 'react';
import ReactDOM from 'react-dom';
import ls from 'local-storage'

import './App.css';
import SingleOrder from './SingleOrder/SingleOrder'
import Signin from "./Signin/Signin";
import Navbar from "../components/Navbar/Navbar";
import AlertDialog from "../components/AlertDialog/AlertDialog";
import ClientPage from "./ClientPage/ClientPage";
import DoctorPage from "./DoctorPage/DoctorPage";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'signIn',
            currentOrder: null,
            currentClient: null,
            currentDoctor: null,
            dialog: ''
        }
    }

    componentDidMount() {
        console.log(ls.get('logged'));

        this.setState(ls.get('logged'));
    }


    dialogOptions = {
        wrongLoginOrPass: {
            title: 'Błąd logowania',
            content: 'Niepoprawny login lub hasło.'
        },
        clientExist: {
            title: 'Błąd rejestracji',
            content: 'Użytkownik o podanym adresie e-mail istnieje już w bazie danych. Zaloguj się.'
        },
        smthingWrong: {
            title: 'Błąd',
            content: 'Wystąpił błąd, spróbuj ponownie.'
        },
        newClientRegistered: {
            title: 'Sukces',
            content: 'Rejestracja powiodła się.'
        },
        logged: {
            title: 'Sukces',
            content: 'Logownie powiodło się.'
        },
        fulfillAllFields: {
            title: 'Błąd',
            content: 'Wypełnij poprawnie wszystkie pola.'
        },
        orderDoesntExist: {
            title: 'Błąd',
            content: 'Zlecenie nie istnieje.'
        },
        notYet: {
            title: 'Błąd',
            content: 'Zlecenie jest zarejestrowane, ale próbka nie została jeszcze przetestowana.'
        },
    }


    logOut = () => {
        this.setState({page: 'signIn', currentOrder: null})
        ls.clear();
    };

    logInToOrder = (order_number, birthday) => {
        fetch('http://localhost:3001/getOrder', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "order_number": order_number,
                "birthday": birthday
            })
        })
            .then(response => {

                switch (response.status) {
                    case 200: {
                        return response.json();
                        break;
                    }

                    case 404: {
                        this.setState({
                            dialog: this.dialogOptions['fulfillAllFields']
                        });
                        break;
                    }

                    case 400: {
                        this.setState({
                            dialog: this.dialogOptions['orderDoesntExist']
                        });
                        break;
                    }

                    case 425: {
                        this.setState({
                            dialog: this.dialogOptions['notYet']
                        });
                        break;

                    }
                }

                return response.json()
            })
            .then(data => {
                this.setState({page: 'singleOrder', currentOrder: data})
                ls.set('logged', {page: 'singleOrder', currentOrder: data})
            })
            .catch((error) => {
                console.error('Error:', error.status);
            });
    };

    registerNewClient = (name, email, password, phone) => {
        if (name === '') name = null;
        if (email === '') email = null;
        if (password === '') password = null;
        if (phone === '') phone = null;

        fetch('http://localhost:3001/registerNewClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password,
                "phone": phone
            })
        })
            .then(response => {
                if (response.status !== 200) {

                    switch (response.status) {
                        case 500: {
                            this.setState({
                                dialog: this.dialogOptions['clientExist']
                            })
                            break;
                        }
                            ;

                        case 501: {
                            this.setState({
                                dialog: this.dialogOptions['smthingWrong']
                            })
                            break;
                        }
                    }


                } else if (response.status === 200) {
                    this.setState({
                        dialog: this.dialogOptions['newClientRegistered']
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    loginToAccount = (email, password) => {
        fetch('http://localhost:3001/getClient', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(response => {
                if (response.status !== 200) {
                    this.setState({
                        dialog: this.dialogOptions['wrongLoginOrPass']
                    })
                } else if (response.status === 200) {
                    return response.json()
                }
            })
            .then(response => {
                if (response !== undefined) {

                    response.password = password; //Password will be send to DoctorPage to get orders

                    ls.set('logged', {page: 'clientPage', currentClient: response})

                    this.setState({
                        dialog: this.dialogOptions['logged'],
                        page: 'clientPage',
                        currentClient: response
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    changePage = (page) => {
        this.setState({page: page})

    }

    loginToDoctorAccount = (email, password) => {
        fetch('http://localhost:3001/getDoctor', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then(response => {
                if (response.status !== 200) {
                    this.setState({
                        dialog: this.dialogOptions['wrongLoginOrPass']
                    })
                } else if (response.status === 200) {
                    return response.json()
                }
            })
            .then(response => {
                if (response !== undefined) {

                    response.password = password; //Password will be send to DoctorPage to get orders

                    ls.set('logged', {page: 'doctorPage', currentDoctor: response})

                    this.setState({
                        dialog: this.dialogOptions['logged'],
                        page: 'doctorPage',
                        currentDoctor: response
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    resetAlertState = () => {
        this.setState({dialog: ''})
    }

    render() {

        const pages = {
            singleOrder: <SingleOrder currentOrder={this.state.currentOrder} />,
            signIn: <Signin logInToOrder={this.logInToOrder}
                            registerNewClient={this.registerNewClient}
                            loginToAccount={this.loginToAccount}
                            loginToDoctorAccount={this.loginToDoctorAccount} />,
            clientPage: <ClientPage currentClient={this.state.currentClient} />,
            doctorPage: <DoctorPage currentDoctor={this.state.currentDoctor}/>
        }

        return (
            <div className={'App'}>
                {this.state.dialog !== '' ?
                    <AlertDialog showDialog={this.resetAlertState} dialog={this.state.dialog}/> : null}
                <Navbar logOut={this.logOut} page={this.state.page}/>
                <div className={'content'}>
                    {pages[this.state.page]}
                </div>

            </div>
        );
    }
}

export default App;
