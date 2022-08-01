import React from 'react';
import './OrderStatus.css';
import {Snackbar, TextField} from '@mui/material';
import {useOrderStatus} from './useOrderStatus';
import {STATUSES} from '../../utils/constants';

const OrderStatus = () => {
    const {getStatusInfo, changeInput, orderInfo, alertOpen} = useOrderStatus();

    if (!orderInfo.get?.id) {
        return (
            <>
                <div className="status-container">
                    <div className="status-wrapper">
                        <div className="status-title">
                            Проверить заказ
                        </div>

                        <TextField
                            label="ID заказа"
                            variant="outlined"
                            onChange={changeInput}
                            onKeyPress={event => event.key === 'Enter' && getStatusInfo()}
                        />

                        <button
                            className="status-btn"
                            onClick={getStatusInfo}
                        >
                            отправить
                        </button>
                    </div>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={alertOpen.get}
                    message="Заказ не найден"
                />
            </>
        );
    }

    return (
        <>
            <div className="status-container">
                <div className="status-wrapper">
                    <div className="status-title">Ваш заказ: №{orderInfo.get.id}</div>
                    <p>Время заказа: {(new Date(orderInfo.get.createAt)).toLocaleString()}</p>
                    <p>ФИО: {orderInfo.get.client.name}</p>
                    <p>Тип: {orderInfo.get.model}</p>
                    <p>Модель: {orderInfo.get.type}</p>
                    <p className={`${['READY', 'DONE'].includes(orderInfo.get.status) ? 'status-status-green' : 'status-status-red'}`}>Статус заказа: {STATUSES[orderInfo.get.status]}</p>
                </div>
            </div>
        </>
    );
};

export default OrderStatus;
