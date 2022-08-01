import React from 'react';
import {Select, MenuItem, FormControl, InputLabel, TextField, Snackbar} from '@mui/material';
import {MODELS, COLORS} from '../../utils/constants';
import './CreateOrder.css';
import {useCreateOrder} from './useCreateOrder';


const CreateOrder = () => {
    const { createOrder, changeField, messageAlert, isOpenAlert, params, setColor, type, gender, color, model } = useCreateOrder();

    return (
        <>
            <div className="create-order-wrapper">
                <div className="create-order-container">
                    <div className="create-order-form">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Пол</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Пол"
                                value={gender.get}
                                onChange={(event) => changeField(gender)(event.target.value)}
                            >
                                <MenuItem value="male" disabled={model.get === 'dress'}>М</MenuItem>
                                <MenuItem value="female">Ж</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label-2">Пошив</InputLabel>
                            <Select
                                labelId="demo-simple-select-label-2"
                                id="demo-simple-select-2"
                                label="Пошив"
                                value={model.get}
                                onChange={(event) => {
                                    changeField(model)(event.target.value);
                                    changeField(type)('model_1');
                                }}
                            >
                                {MODELS.map(({name, id}) => (
                                    <MenuItem key={id}  value={id} disabled={gender.get === 'male' && id === 'dress'}>{name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label-2">Модель</InputLabel>
                            <Select
                                labelId="demo-simple-select-label-2"
                                id="demo-simple-select-2"
                                label="Модель"
                                value={type.get}
                                onChange={(event) => changeField(type)(event.target.value)}
                            >
                                {Object.keys(MODELS.find(({ id }) => id === model.get).types).map((key, index) => (
                                    <MenuItem key={key} value={key}>Модель {index + 1}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {Object.values(params.extends).map(({get, set, label}, index) => (
                            <TextField
                                className="create-order-input"
                                key={index}
                                type={['Имя', 'Почта'].includes(label) ? 'text' : 'number'}
                                label={label}
                                variant="outlined"
                                onChange={event => set(event.target.value)}
                            />
                        ))}


                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label-3">Цвет ткани</InputLabel>
                            <Select
                                labelId="demo-simple-select-label-3"
                                id="demo-simple-select-3"
                                label="Цвет ткани"
                                value={color}
                                onChange={(event) => setColor(event.target.value)}
                            >
                                {Object.entries(COLORS).map(([key, values]) => (
                                    <MenuItem key={key} value={key}>{values.name}</MenuItem>
                                ))}
                            </Select>
                            <br/>
                            <div style={{backgroundColor: COLORS[color].color, height: '40px'}} />
                        </FormControl>
                        <button
                            className="create-order-btn"
                            onClick={() => createOrder({...params.default, color, model: model.get, gender: gender.get, type: type.get })}
                        >
                            ЗАКАЗАТЬ за {MODELS.find(({ id }) => id === model.get).types[type.get]}
                        </button>

                    </div>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={isOpenAlert}
                message={messageAlert}
            />
        </>
    );
};

export default CreateOrder;
