import sendRequest from './send-request';
const BASE_URL = '/api/users';

// Refactored code below
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}
