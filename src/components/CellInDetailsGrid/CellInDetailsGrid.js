import React from 'react';
import './CellInDetailsGrid.css'

const CellInDetailsGrid = (props) => {

    let label = props.label;

    let data = props.data;

    let additional_class = 'cell-smaller';
    let special_result_class = '';
    if (data === '') data = '-';

    if (props.additional_class !== undefined) {
        additional_class = props.additional_class;
    }

    if (data === 'Pozytywny') special_result_class = 'positive-result'
    else if (data === 'Negatywny') special_result_class = 'negative-result'

    console.log(props.children)

    if (props.forDoctor) {
        label = 'Wprowadź wynik: ';
        data = props.children;
    }

    return (
        <div id={'name'} className={`order-details-cell ${additional_class}`}>
            <div className={'cell-border-div'}>
                <div className={'logo'}>

                </div>

                <div className={'cell-content'}>
                    <span className={'cell-label'}>{label}</span>
                    <span className={'cell-value ' + special_result_class}>{data}</span>
                </div>
            </div>

        </div>
    )


};


export default CellInDetailsGrid;
