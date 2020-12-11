import React from 'react';

import './SingleOrder.css';
import Barcode from '../../components/Barcode/Barcode'
import RegisterDate from "../../components/RegisterDate/RegisterDate";
import OrderInfo from "../OrderInfo/OrderInfo";
import Footer from "../../components/Footer/Footer"
import Result from "../../components/Result/Result";

class SingleOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: ''
        }
    }

    componentDidMount() {
        this.setState({order: this.props.currentOrder})
        console.log(this.props.currentOrder)
    }

    render() {
        return (
            <div className={'single-order-page'}>
                <div className={'single-order-content'}>
                    <div className={'single-order-card single-order-card--shadow'}>
                        <Barcode orderNumber={this.state.order.order_number}/>
                        <RegisterDate register_date={this.state.order.register_date}/>
                        <Result orderInfo={this.state.order}/>
                    </div>

                    <div className={'single-order-card single-order-card--shadow'}>
                        <OrderInfo orderInfo={this.state.order}/>
                    </div>


                </div>

                <Footer additional_class={'single-order-page-footer'}/>
            </div>

        );
    }
}

export default SingleOrder;
