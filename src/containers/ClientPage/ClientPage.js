import React from 'react';

import './ClientPage.css';
import Footer from "../../components/Footer/Footer"
import OrdersForClient from "../../components/OrdersForClient/OrdersForClient";
import ForNewOrder from "../../components/LoginForm/ForNewOrder/ForNewOrder";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import plLocale from "date-fns/locale/pl";
import AlertDialog from "../../components/AlertDialog/AlertDialog";

class ClientPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            client: this.props.currentClient,
            orders: [],
            dialog: ''
        }
    }

    formatDate = (date) => {

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

    getOrders() {
        fetch('http://localhost:3001/getOrdersForClient', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": this.state.client.email,
                "password": this.state.client.password
            })
        })
            .then(response => {
                if (response.status !== 200) {
                    return undefined
                } else if (response.status === 200) {
                    return response.json()
                }
            })
            .then(response => {
                if (response !== undefined) {
                    console.log(response)
                    this.setState({
                        orders: response
                    })
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    componentDidMount() {
        // this.setState({client: this.props.currentClient})
        console.log('ehh', this.props.currentClient)
        this.getOrders()

    }

    createNewOrder = (...props) => {

        props = props.map(prop => {
            return (prop==='' ? null : prop);
        })

        const [name, surname, pesel, email, birthday] = props;


        fetch('http://localhost:3001/createNewOrder', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": name,
                "surname": surname,
                "pesel": pesel,
                "birthday": this.formatDate(birthday),
                "register_date": this.formatDate(new Date()),
                "client": this.state.client.name,
                "recipient": this.state.client.name,
                "patient_email": email
            })
        })
            .then(response => {
                if (response.status !== 200) {
                    return undefined
                } else if (response.status === 200) {
                    return response.json()
                }
            })
            .then(response => {
                console.log(response)

                if (response !== undefined) {
                    this.setState({dialog: this.dialogOptions['orderCreated']});
                    this.getOrders()
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    generateOrders() {
        return (
            this.state.orders.map((order) => {
                return (
                    <OrdersForClient key={order.order_number} orderInfo={order}/>
                )
            })
        )
    }

    resetAlertState = () => {
        this.setState({dialog: ''})
    }

    dialogOptions = {
        wrongLoginOrPass: {
            title: 'Błąd logowania',
            content: 'Niepoprawny login lub hasło.'
        },
        orderCreated: {
            title: 'Sukces',
            content: 'Nowe zlecenie zostało zarejestrowane.'
        },
    }


    render() {
        return (
            <div className={'single-order-page'}>
                {this.state.dialog !== '' ?
                    <AlertDialog showDialog={this.resetAlertState} dialog={this.state.dialog}/> : null}
                <div className={'single-order-content'}>
                    <div className={'single-order-card single-order-card--shadow'}>

                        <div className={'client-page-headline title-with-border-at-left'}>
                            Witaj, {this.state.client.name}.
                        </div>
                        <div className={'title-with-border-at-left light-orange-background'}>
                            Twoje zlecenia
                        </div>

                        {this.state.orders.length > 0 ? this.generateOrders() : ''}

                    </div>

                    <div className={'single-order-card single-order-card--shadow'}>


                        <div className={'title-with-border-at-left light-orange-background'}>
                            Zarejestruj nowe zlecenie
                        </div>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={plLocale}>

                        <ForNewOrder createNewOrder={this.createNewOrder}/>
                        </MuiPickersUtilsProvider>
                    </div>


                </div>

                <Footer additional_class={'single-order-page-footer'}/>
            </div>

        );
    }
}

export default ClientPage;
