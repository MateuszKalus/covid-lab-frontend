import {useEffect, useState } from 'react';
import './Result.css'
import CellInDetailsGrid from "../../components/CellInDetailsGrid/CellInDetailsGrid";

const Result = (props) => {

    const [order_details, setOrder] = useState(props.orderInfo)

    useEffect(()=>{
        setOrder(props.orderInfo);
    }, [props])


    return (
        <div className={"records-container"}>
            <div className={"result-grid records-grid"}>
                <CellInDetailsGrid label={'Parametr:'} data={'SARS-CoV-2'} additional_class={'result-cell cell-medium'}/>
                <CellInDetailsGrid label={'Wynik:'} data={order_details.result ? 'Pozytywny' : 'Negatywny'} additional_class={'result-cell cell-medium'}/>
                <CellInDetailsGrid label={'Zakres referencyjny:'} data={'-'} additional_class={'result-cell cell-medium'}/>
                <CellInDetailsGrid label={'Opis'} data={'PCR'} additional_class={'result-cell cell-medium'}/>

            </div>
        </div>

    );
}


export default Result;
