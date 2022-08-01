import axios from '../modules/axios';

const getOrders = (params, headers) => axios.get('/api/orders', { params, headers });

export default getOrders;
