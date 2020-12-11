import React from 'react';

import './DoctorPage.css';
import Footer from "../../components/Footer/Footer"
import OrdersForClient from "../../components/OrdersForClient/OrdersForClient";
import ForNewOrder from "../../components/LoginForm/ForNewOrder/ForNewOrder";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import plLocale from "date-fns/locale/pl";
import AlertDialog from "../../components/AlertDialog/AlertDialog";



class DoctorPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            doctor: this.props.currentDoctor,
            orders: [],
            dialog: ''
        }
    }

    generateOrders() {
        return (
            this.state.orders.map((order) => {
                return (
                    <OrdersForClient key={order.order_number} modifyOrder={this.modifyOrder} orderInfo={order} forDoctor/>
                )
            })
        )
    }

    componentDidMount() {
        this.getOrders();
    }

    modifyOrder = (order_number, result) => {
        fetch('http://localhost:3001/modifyOrder', {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": this.state.doctor.email,
                "password": this.state.doctor.password,
                "order_number":order_number,
                "result":result
            })
        })
            .then(response => {
                if (response.status !== 200) {
                    return undefined
                } else if (response.status === 200) {
                    this.getOrders();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    getOrders() {
        fetch('http://localhost:3001/getOrdersForDoctor', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": this.state.doctor.email,
                "password": this.state.doctor.password
            })
        })
            .then(response => {
                if (response.status !== 200) {
                    this.setState({
                        orders: []
                    })

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


    render() {
        return (
            <div className={'single-order-page'}>

                {this.state.dialog !== '' ?
                    <AlertDialog showDialog={this.resetAlertState} dialog={this.state.dialog}/> : null}

                <div className={'single-order-content'}>
                    <div className={'single-order-card single-order-card--shadow'}>
                        <div className={'client-page-headline title-with-border-at-left'}>
                            Witaj, {this.state.doctor.name}
                        </div>
                        <div className={'title-with-border-at-left light-orange-background'}>
                            Twoje zlecenia
                        </div>

                        {this.state.orders.length > 0 ? this.generateOrders() : ''}

                    </div>

                </div>

                <Footer additional_class={'single-order-page-footer'}/>
            </div>
        );
    }
}

export default DoctorPage;
