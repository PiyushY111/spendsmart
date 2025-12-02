// Store token in localStorage
export function setToken(token) {
  localStorage.setItem('token', token);
}

// Get token from localStorage
export function getToken() {
  return localStorage.getItem('token');
}

// Remove token from localStorage
export function removeToken() {
  localStorage.removeItem('token');
}

// Store user data in localStorage
export function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// Get user data from localStorage
export function getUser() {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

// Remove user data from localStorage
export function removeUser() {
  localStorage.removeItem('user');
}

// Check if user is authenticated
export function isAuthenticated() {
  return !!getToken();
}

// Logout function
export function logout() {
  removeToken();
  removeUser();
}
