import axios from '../modules/axios';

const changeStatus = (params, headers) => axios.post('/api/orders/changeStatus', params, { headers });

export default changeStatus;
