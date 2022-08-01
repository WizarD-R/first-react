import axios from '../modules/axios';

const createOrders = (params, headers) => axios.post('/api/orders', params, { headers });

export default createOrders;
