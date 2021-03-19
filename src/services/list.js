import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:3001/api/list',
  withCredentials: true,
});

const LIST_SERVICE = {
  ALL: async () => {
    return await service.get('/all');
  },

  CREATE: async (data) => {
    return await service.post('/create', data);
  },

  UPDATE: async (id) => {
    return await service.put(`/update/${id}`);
  },

  DELETE: async (id) => {
    return await service.delete(`/delete/${id}`);
  },
};

export default LIST_SERVICE;
