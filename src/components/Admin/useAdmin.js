import {useEffect, useState} from 'react';
import { getOrders, changeStatus } from '../../api';

const useAdminState = () => {
    const [token, setToken] = useState('');
    const [listOrder, setListOrder] = useState([]);
    const [currentOrder, setCurrentOrder] = useState(null);

    return {
        token: { get: token, set: setToken },
        listOrder: { get: listOrder, set: setListOrder },
        currentOrder: { get: currentOrder, set: setCurrentOrder },
    };
};


const useActions = (token, listOrder, currentOrder) => {
    const onChange = event => {
        if (event.key === 'Enter' && event.target.value === 'sewAdminka') token.set('isAdmin');
    };

    const getListOrders = async () => {
        if (token.get !== 'isAdmin') return;
        try {
            const listOrders = await getOrders();
            listOrder.set(listOrders.data.orders);
        } catch (e) {
            console.log(e, ' - Что-то пошло не так... Звоните в поддержку')
        }
    };

    const changeStatusOrder = async (id, orderStatus) => {
        try {
            await changeStatus({ id, orderStatus })
            getListOrders();
        } catch (e) {
            console.log(e, ' - Что-то пошло не так... Звоните в поддержку')
        }
    };

    const changeOrderOpen = (id = null) => {
        currentOrder.set(prev => prev === id ? null : id);
    };

    return {
        onChange,
        getListOrders,
        changeStatusOrder,
        changeOrderOpen,
    };
};

export const useAdmin = () => {
    const { token, listOrder, currentOrder } = useAdminState();

    const {onChange, getListOrders, changeStatusOrder, changeOrderOpen} = useActions(token, listOrder, currentOrder);

    useEffect(() => {
        getListOrders();
    }, [token.get])

    return {
        onChange,
        token,
        listOrder,
        currentOrder,
        changeStatusOrder,
        changeOrderOpen,
    };
};
