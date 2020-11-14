import React from 'react';
import './Barcode.css'

const Barcode = (props) => {
    let barcode = "https://barcodes4.me/barcode/c128a/"+props.orderNumber+".png?height=80&resolution=2";

    return (
        <div className={'barcode'}>
            <img id='barcode-img' src={barcode} alt={'barcode'}/>
            <span className={'barcode-descr'}>{props.orderNumber}</span>
        </div>
    )

};




export default Barcode;
