import axios from '../modules/axios';

const getOrderInfo = (id, headers) => axios.get(`/api/orders/${id}`, { headers });

export default getOrderInfo;
