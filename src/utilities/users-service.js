import { redirectDocument } from 'react-router-dom';
import * as usersAPI from './users-api';

export async function signUp(userData){
//when we sign up we expect a token 
const token = await usersAPI.signUp(userData);

localStorage.setItem('token', token);
//desifer the token and update the userState
return getUser;
}

//its doing nothing except >  man in the middle passing the mesg at this point, connect the api 

export function getToken() {
    // getItem returns null if there's no string
    const token = localStorage.getItem('token');
    if (!token) return null;
    // Obtain the payload of the token
    const payload = JSON.parse(atob(token.split('.')[1]));
    // A JWT's exp is expressed in seconds, not milliseconds, so convert
    if (payload.exp < Date.now() / 1000) {
      // Token has expired - remove it from localStorage
      localStorage.removeItem('token');
      return null;
    }
    return token;
  }
  export async function login(credentials){
    const token = await usersAPI.login(credentials);
    localStorage.setItem('token', token);
    return getUser();
  }
  export function getUser() {
    const token = getToken();
    // If there's a token, return the user in the payload, otherwise return null
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
  }

  //dev tools >> application >> localstorge

  export function logOut() {
    localStorage.removeItem('token');
  }

  export function checkToken() {
    return usersAPI.checkToken()

      .then(dateStr => new Date(dateStr));
  }