import {useEffect, useState} from 'react';
import './OrdersForClient.css'
import CellInDetailsGrid from "../../components/CellInDetailsGrid/CellInDetailsGrid";

const OrdersForClient = ({forDoctor, ...props}) => {

    if (forDoctor) console.log('Doctor: ', forDoctor)
    else console.log('Doctor false?: ', forDoctor)

    const [order_details, setOrder] = useState(props.orderInfo)

    const {modifyOrder} = props;

    useEffect(() => {
        setOrder(props.orderInfo);
        console.log(order_details)
    }, [props])

    const checkResult = () => {
        switch (order_details.result) {
            case true:
                return 'Pozytywny';
                break;

            case false:
                return 'Negatywny';
                break;

            default:
                return 'Oczekujący';
                break;
        }
    }

    const changeOrder = (result) => {
        modifyOrder(order_details.order_number, result);
    }

    return (
        <div className={"records-container"}>
            <div className={"orders-for-client-grid result-grid"}>
                <CellInDetailsGrid label={'Numer zamówienia:'} data={order_details.order_number}
                                   additional_class={'result-cell cell-1_4'}/>
                <CellInDetailsGrid label={'Pesel:'} data={order_details.pesel}
                                   additional_class={'result-cell cell-1_4'}/>
                <CellInDetailsGrid label={'Data rejestracji:'} data={order_details.register_date}
                                   additional_class={'result-cell cell-1_4'}/>
                <CellInDetailsGrid label={'Wynik'} data={checkResult()} additional_class={'result-cell cell-1_4'} forDoctor={forDoctor}>
                    <div className={'doctor-check-result'}>
                        <button onClick={() => changeOrder(true)} className={'doctor-check-result-btn'}>Pozytywny</button>
                        <button onClick={() => changeOrder(false)} className={'doctor-check-result-btn'}>Negatywny</button>
                    </div>
                </CellInDetailsGrid>

            </div>
        </div>

    );
}


export default OrdersForClient;
