import React from 'react';
import './PriceList.css';
import {MODELS} from '../../../../utils/constants';

const PriceList = () => {
    return (
        <>
            <div id="PriceList" className="price-list-block-container">
                <div className="price-list-block-wrapper">
                    <div className="price-list-block-title">Прайс индивидуального пошива</div>
                    <hr/>
                </div>
                <div className="price-list-block-list">
                    {MODELS.map(({id, name, price}, index) => (
                        <div key={id} className={index % 2 === 0 ? 'price-list-block-type' : 'price-list-block-type price-list-block-bg-color'}>
                            <div className="price-list-block-text">{name}</div>
                            <div className="price-list-block-text">{price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PriceList;
