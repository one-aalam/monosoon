import axios from 'axios'

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || '',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
});

export type APICallStatus = 'IDLE' | 'PENDING' | 'SUCCESS' | 'ERROR'
