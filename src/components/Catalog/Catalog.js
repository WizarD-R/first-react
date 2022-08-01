import React, {useState, useEffect, useContext} from 'react';
import './Catalog.css';
import Card from './components/Card/Card';
import {MODELS} from '../../utils/constants';
import Context from '../../utils/context';

const useCatalog = () => {
    const [isBuy, setIsBuy] = useState('');

    return {
        isBuy: {get: isBuy, set: setIsBuy},
    };
};

const scrollToElement = model => {
    const element = document.getElementById(model.get);
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

const Catalog = () => {
    const {isBuy} = useCatalog();
    const { model } = useContext(Context);
    useEffect(() => scrollToElement(model), [])
    return (
        <>
            <div className="catalog-container">
                <div className="catalog-wrapper">
                    {MODELS.map(el => (
                        <div key={el.id} className="catalog-group">
                            <div id={el.id} className="catalog-title">
                                {el.name}
                            </div>
                            <div className="catalog-cards">

                                {Object.entries(el.types).map(([key, value], index) => (
                                    <div key={key}>
                                        <Card
                                            model={el.id}
                                            type={key}
                                            price={value}
                                            index={index}
                                            isBuy={isBuy}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Catalog;
