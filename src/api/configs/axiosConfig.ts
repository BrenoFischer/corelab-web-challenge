import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://corelab-api-spiz.onrender.com',
  withCredentials: false,
})
