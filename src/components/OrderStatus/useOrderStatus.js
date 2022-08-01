import {useState} from 'react';
import {getOrderInfo} from '../../api'

const useCustomState = () => {
    const [idOrder, setIdOrder] = useState();
    const [orderInfo, setOrderInfo] = useState({});
    const [isOpenAlert, setIsOpenAlert] = useState(false);

    return {
        idOrder: {get: idOrder, set: setIdOrder},
        orderInfo: {get: orderInfo, set: setOrderInfo},
        alertOpen: {get: isOpenAlert, set: setIsOpenAlert},
    };
};

const useActions = (idOrder, orderInfo, alertOpen) => {
    const orderNotFound = () => {
        alertOpen.set(true);
        setTimeout(() => { alertOpen.set(false); }, 5000);
    };

    const getStatusInfo = async () => {
        try {
            const dataOrder = await getOrderInfo(idOrder.get)
            dataOrder.status === 200 ? orderInfo.set(dataOrder.data) : orderNotFound();
        } catch (e) {
            orderNotFound();
            console.log(e, ' - Что-то пошло не так... Звоните в поддержку')
        }
    };

    const changeInput = (event) => {
        idOrder.set(event.target.value);
    };

    return {
        getStatusInfo,
        changeInput,
    };
};

export const useOrderStatus = () => {
    const {idOrder, orderInfo, alertOpen} = useCustomState();

    const {getStatusInfo, changeInput} = useActions(idOrder, orderInfo, alertOpen);

    return {
        getStatusInfo,
        changeInput,
        idOrder,
        orderInfo,
        alertOpen,
    };
};
