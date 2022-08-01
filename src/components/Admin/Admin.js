import React from 'react';
import './Admin.css';
import {FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import {useAdmin} from './useAdmin';
import {STATUSES} from '../../utils/constants';

const Admin = () => {
    const {onChange, token, listOrder, changeStatusOrder, currentOrder, changeOrderOpen} = useAdmin();
    if (token.get !== 'isAdmin') {
        return (
            <>
                <div className="admin-container">
                    <div className="admin-wrapper-password">
                        <div className="admin-password">
                            <TextField
                                label="Пароль"
                                type="password"
                                variant="outlined"
                                onKeyPress={onChange}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="admin-container">
                <div className="admin-wrapper">
                    <div className="admin-list-orders">
                        {listOrder.get.length ? listOrder.get.map(element => (
                            <div
                                key={element.id}
                                className="admin-card-container"
                            >
                                <div className="admin-short-card" onClick={() => changeOrderOpen(element.id)}>
                                    <p> ID: {element.id} </p>
                                    <p> Статус: {STATUSES[element.status]} </p>
                                    <p> ФИО: {element.client.name} </p>
                                </div>
                                {currentOrder.get === element.id && (
                                    <div className="admin-overlay" onClick={changeOrderOpen}>
                                        <div className="admin-order-card" onClick={event => event.stopPropagation()}>
                                            <p className="icon-close" onClick={changeOrderOpen}>X</p>
                                            <div className="admin-order-card-info">
                                                <p> ID - {element.id}</p>
                                                <p> Почта клиента - {element.client.email}</p>
                                                <p> Номер клиента - {element.client.number}</p>
                                                <p> Имя клиента - {element.client.name}</p>
                                                <p> Пол - {element.gender}</p>
                                                <p> Тип - {element.model}</p>
                                                <p> Модель - {element.type}</p>
                                                <p> Цвет - {element.color}</p>
                                                <div>
                                                    Дата - {(new Date(element.createdAt)).toLocaleString()}
                                                </div>
                                            </div>
                                            <div className="admin-control">
                                                <FormControl fullWidth>
                                                    <InputLabel id="statuses">Модель</InputLabel>
                                                    <Select
                                                        labelId="statuses"
                                                        id="statuses"
                                                        label="Статус заказа"
                                                        value={element.status}
                                                        onChange={(event) => changeStatusOrder(element.id, event.target.value)}
                                                    >
                                                        {Object.entries(STATUSES).map(([key, value]) => (
                                                            <MenuItem key={key} value={key}>{value}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                        )) : (
                            <div className="admin-list-null">Список пуст</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
};

export default Admin;
