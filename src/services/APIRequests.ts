import axios from 'axios';

const baseURL = 'http://616d6bdb6dacbb001794ca17.mockapi.io/';

const api = axios.create({ baseURL });

export const getData = async (endpoint: string) => api.get(endpoint);

export default api;
