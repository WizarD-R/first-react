import { useState, useContext, useEffect } from 'react';
import Context from '../../utils/context';
import {useNavigate} from 'react-router-dom';
import { createOrders } from '../../api'

const useParamsClients = () => {
    const [getNeck, setNeck] = useState('');
    const [getBreast, setBreast] = useState('');
    const [getWaist, setWaist] = useState('');
    const [getHip, setHip] = useState('');
    const [getBiceps, setBiceps] = useState('');
    const [getWrist, setWrist] = useState('');
    const [getSleeve, setSleeve] = useState('');
    const [getGrowth, setGrowth] = useState('');
    const [getName, setName] = useState('');
    const [getNumber, setNumber] = useState('');
    const [getEmail, setEmail] = useState('');

    return {
        extends: {
            name: {get: getName, set: setName, label: 'Имя'},
            number: {get: getNumber, set: setNumber, label: 'Номер'},
            email: {get: getEmail, set: setEmail, label: 'Почта'},
            neck: {get: getNeck, set: setNeck, label: 'Обхват шеи, см'},
            breast: {get: getBreast, set: setBreast, label: 'Обхват груди, см'},
            waist: {get: getWaist, set: setWaist, label: 'Обхват талии, см'},
            hip: {get: getHip, set: setHip, label: 'Обхват бедер, см'},
            biceps: {get: getBiceps, set: setBiceps, label: 'Обхват бицепса, см'},
            wrist: {get: getWrist, set: setWrist, label: 'Обхват запястья, см'},
            sleeve: {get: getSleeve, set: setSleeve, label: 'Рукав, см'},
            growth: {get: getGrowth, set: setGrowth, label: 'Рост, см'},
        },
        default: {
            name: getName,
            number: getNumber,
            email: getEmail,
            neck: getNeck,
            breast: getBreast,
            waist: getWaist,
            hip: getHip,
            biceps: getBiceps,
            wrist: getWrist,
            sleeve: getSleeve,
            growth: getGrowth,
        }
    };
};

const useActions = (navigate, setMessageAlert, setIsOpenAlert) => {
    const changeField = entries => entries.set;

    const scrollUp = () => window.scroll({ left: 0, top: 0, behavior: 'smooth' });

    const getDataOrder = fullParams => {
        const userParams = {
            neck: fullParams.neck,
            breast: fullParams.breast,
            waist: fullParams.waist,
            hip: fullParams.hip,
            biceps: fullParams.biceps,
            wrist: fullParams.wrist,
            sleeve: fullParams.sleeve,
            growth: fullParams.growth,
        };

        return {
            userInfo: {
                number: fullParams.number,
                name: fullParams.name,
                email: fullParams.email,
            },
            model: fullParams.model,
            type: fullParams.type,
            gender: fullParams.gender,
            color: fullParams.color,
            parameters: Object.entries(userParams).map(([name, size]) => ({ name, size })),
        };
    };

    const createOrder = async fullParams => {
        scrollUp();
        const isValidate = Object.values(fullParams).reduce((acc, el) => acc && !!el, true);
        if (isValidate) {
            const dataOrder = getDataOrder(fullParams);
            try {
                await createOrders(dataOrder);
                navigate('/');
            } catch (e) {
                setMessageAlert('Заказ не создан');
                console.log(e, ' - Что-то пошло не так, позвоните в поддержку...', dataOrder)
            }
        } else {
            setMessageAlert('Введите все данные');
        }

        setIsOpenAlert(true);
        setTimeout(() => setIsOpenAlert(false), 5000);
    };

    useEffect(scrollUp, []);

    return {
        changeField,
        createOrder,
    };
};

export const useCreateOrder = () => {
    const {model, gender, type} = useContext(Context);
    const [color, setColor] = useState('color_1');
    const params = useParamsClients();

    const [isOpenAlert, setIsOpenAlert] = useState(false);
    const [messageAlert, setMessageAlert] = useState('Введите все данные');
    const navigate = useNavigate();

    const { changeField, createOrder } = useActions(navigate, setMessageAlert, setIsOpenAlert);


    return {
        model,
        gender,
        type,
        color,
        setColor,
        params,
        isOpenAlert,
        messageAlert,
        changeField,
        createOrder,
    };
};
