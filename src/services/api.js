import axios from 'axios';

const API_BASE_URL = 'https://prakruthi-backend-hgfsbbefc2dehffv.southindia-01.azurewebsites.net/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNREFUSED' || error.code === 'ERR_NETWORK') {
      console.warn('Backend not available, using mock data');
      return Promise.resolve({ data: {} });
    }
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Essential API calls only
export const donationAPI = {
  create: (donation) => api.post('/donations', donation),
  getStats: () => api.get('/donations/stats'),
};

export const volunteerAPI = {
  create: (volunteer) => api.post('/volunteers', volunteer),
  getStats: () => api.get('/volunteers/stats'),
};

export const contactAPI = {
  create: (contact) => api.post('/contacts', contact),
  getStats: () => api.get('/contacts/stats'),
};

export const eventAPI = {
  getUpcoming: () => api.get('/events/upcoming'),
  getStats: () => api.get('/events/stats'),
};

export default api;