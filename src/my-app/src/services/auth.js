import axios from 'axios'

export function login ({ email, password }) {
    return axios .post('http://localhost:3000/auth/login', {email, password})
  
}