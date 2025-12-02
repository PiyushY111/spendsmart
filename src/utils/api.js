import { getToken } from './auth';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Create a centralized API helper
export const api = {
  baseURL: API_BASE_URL,
  
  // Helper method to make API calls
  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    // Get token from localStorage
    const token = getToken();
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }), // Add token if it exists
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      return response;
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  },

  // Auth endpoints
  auth: {
    signup: (userData) => api.request('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
    login: (userData) => api.request('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  },

  // Expenses endpoints
  expenses: {
    getAll: (userId) => api.request(`/api/expenses?userId=${userId}`),
    create: (expenseData) => api.request('/api/expenses', {
      method: 'POST',
      body: JSON.stringify(expenseData),
    }),
    delete: (id) => api.request(`/api/expenses/${id}`, {
      method: 'DELETE',
    }),
  },

  // Earnings endpoints
  earnings: {
    getAll: (userId) => api.request(`/api/earnings?userId=${userId}`),
    create: (earningData) => api.request('/api/earnings', {
      method: 'POST',
      body: JSON.stringify(earningData),
    }),
    delete: (id) => api.request(`/api/earnings/${id}`, {
      method: 'DELETE',
    }),
  },

  // Goals endpoints
  goals: {
    getAll: (userId) => api.request(`/api/goals?userId=${userId}`),
    create: (goalData) => api.request('/api/goals', {
      method: 'POST',
      body: JSON.stringify(goalData),
    }),
    delete: (id) => api.request(`/api/goals/${id}`, {
      method: 'DELETE',
    }),
  },

  // Investments endpoints
  investments: {
    getAll: (userId) => api.request(`/api/investments?userId=${userId}`),
    create: (investmentData) => api.request('/api/investments', {
      method: 'POST',
      body: JSON.stringify(investmentData),
    }),
    delete: (id) => api.request(`/api/investments/${id}`, {
      method: 'DELETE',
    }),
  },

  // Recurring bills endpoints
  recurring: {
    getAll: (userId) => api.request(`/api/recurring?userId=${userId}`),
    create: (billData) => api.request('/api/recurring', {
      method: 'POST',
      body: JSON.stringify(billData),
    }),
    delete: (id) => api.request(`/api/recurring/${id}`, {
      method: 'DELETE',
    }),
  },

  // Savings endpoints
  savings: {
    get: (month, userId) => api.request(`/api/savings/${month}?userId=${userId}`),
    create: (savingsData) => api.request('/api/savings', {
      method: 'POST',
      body: JSON.stringify(savingsData),
    }),
    deleteMeta: (id) => api.request(`/api/savingsMeta/${id}`, {
      method: 'DELETE',
    }),
  },
};

export default api;