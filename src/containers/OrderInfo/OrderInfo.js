import {useEffect, useState } from 'react';
import './OrderInfo.css'
import CellInDetailsGrid from "../../components/CellInDetailsGrid/CellInDetailsGrid";

const OrderInfo = (props) => {

    const [order_details, setOrder] = useState(props.orderInfo)

    useEffect(()=>{
        setOrder(props.orderInfo);
    }, [props])

    const zipPattern = [
        ['name', 'Imię i nazwisko pacjenta:', order_details.name + ' ' + order_details.surname],
        ['pesel', 'PESEL', order_details.pesel],
        ['birthday', 'Data urodzenia:', order_details.birthday],
        ['order_number', 'Numer zlecenia:', order_details.order_number],
        ['register_date', 'Data rejestracji:', order_details.register_date],
        ['doctor', 'Lekarz:', order_details.doctor],
        ['client', 'Zamawiający:', order_details.client, "cell-bigger"],
        ['department', 'Oddział:', order_details.department, "cell-bigger"],
        ['recipient', 'Odbiorca:', order_details.recipient, "cell-bigger"]
    ]

    const createCells = () => {

        return (Object.keys(order_details).map((item)=>{
            for (var pattern of zipPattern) {
                if (item === pattern[0]) {

                    return <CellInDetailsGrid key={item} id={pattern[1]} label={pattern[1]} data={pattern[2]} additional_class={pattern[3]}/>
                }
            }
        }))

    }




    return (
        <div className={"records-container"}>
            <div className={"title-with-border-at-left records-headline"}>ASD</div>

            <div className={"records-grid"}>

                {createCells()}


            </div>
        </div>

    );
}


export default OrderInfo;
