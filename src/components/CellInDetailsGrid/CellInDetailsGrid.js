import React from 'react';
import './CellInDetailsGrid.css'

const CellInDetailsGrid = (props) => {

    const label = props.label;
    let data = props.data;

    let additional_class = 'cell-smaller';

    if (props.additional_class !== undefined) {
        additional_class = props.additional_class;
    }

    if (data === '') data = '-';


    return (
        <div id={'name'} className={`order-details-cell ${additional_class}`}>
            <div className={'border-div'}>
                <div className={'logo'}>

                </div>

                <div className={'cell-content'}>
                    <span className={'cell-label'}>{label}</span>
                    <span className={'cell-value'}>{data}</span>
                </div>
            </div>

        </div>
    )

};




export default CellInDetailsGrid;
