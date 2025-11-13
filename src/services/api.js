import axios from 'axios';

// ----------------------------------------------------------------------
// MODIFIED LINE: Use the live Render backend URL
// ----------------------------------------------------------------------
const API_BASE_URL = 'https://backend-ngo-draft1.onrender.com/api';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Donation API calls
export const donationAPI = {
  getAll: () => api.get('/donations'),
  getById: (id) => api.get(`/donations/${id}`),
  create: (donation) => api.post('/donations', donation),
  update: (id, donation) => api.put(`/donations/${id}`, donation),
  delete: (id) => api.delete(`/donations/${id}`),
  getByStatus: (status) => api.get(`/donations/status/${status}`),
  getStats: () => api.get('/donations/stats'),
};

// Volunteer API calls
export const volunteerAPI = {
  getAll: () => api.get('/volunteers'),
  getById: (id) => api.get(`/volunteers/${id}`),
  create: (volunteer) => api.post('/volunteers', volunteer),
  update: (id, volunteer) => api.put(`/volunteers/${id}`, volunteer),
  delete: (id) => api.delete(`/volunteers/${id}`),
  getByStatus: (status) => api.get(`/volunteers/status/${status}`),
  updateStatus: (id, status) => api.put(`/volunteers/${id}/status`, { status }),
  getStats: () => api.get('/volunteers/stats'),
};

// Contact API calls
export const contactAPI = {
  getAll: () => api.get('/contacts'),
  getById: (id) => api.get(`/contacts/${id}`),
  create: (contact) => api.post('/contacts', contact),
  update: (id, contact) => api.put(`/contacts/${id}`, contact),
  delete: (id) => api.delete(`/contacts/${id}`),
  getByStatus: (status) => api.get(`/contacts/status/${status}`),
  updateStatus: (id, status) => api.put(`/contacts/${id}/status`, { status }),
  getStats: () => api.get('/contacts/stats'),
};

// Event API calls
export const eventAPI = {
  getAll: () => api.get('/events'),
  getById: (id) => api.get(`/events/${id}`),
  create: (event) => api.post('/events', event),
  update: (id, event) => api.put(`/events/${id}`, event),
  delete: (id) => api.delete(`/events/${id}`),
  getUpcoming: () => api.get('/events/upcoming'),
  getPast: () => api.get('/events/past'),
  getByStatus: (status) => api.get(`/events/status/${status}`),
  getStats: () => api.get('/events/stats'),
};

export default api;