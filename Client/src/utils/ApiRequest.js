// API Configuration
// Use environment variable for API URL, fallback to production URL
const host = process.env.REACT_APP_API_URL || "https://finance-manager-r5iy.onrender.com";

// API Endpoints
export const setAvatarAPI = `${host}/api/auth/setAvatar`;
export const registerAPI = `${host}/api/auth/register`;
export const loginAPI = `${host}/api/auth/login`;
export const addTransaction = `${host}/api/v1/addTransaction`;
export const getTransactions = `${host}/api/v1/getTransaction`;
export const editTransactions = `${host}/api/v1/updateTransaction`;
export const deleteTransactions = `${host}/api/v1/deleteTransaction`;
