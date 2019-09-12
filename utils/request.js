import axios from 'axios';
import { baseUrl } from '../config/config';

const checkStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw response;
};

const checkError = response => {
  const { data } = response;
  const { errcode, errmsg } = data;
  if (!errcode) return response;
  throw errmsg;
};
const request = ({ url, method, params, data }) => {
  return axios({
    method: method,
    url: url,
    baseURL: baseUrl,
    data,
    params,
  })
    .then(checkStatus)
    .then(checkError)
    .then(response => {
      return { data: response.data, success: true };
    })
    .catch(error => {
      console.log('%c error', 'color:blue', error);
    });
};

export const getMethod = ({ url, params, data }) => request({ url, method: 'GET', params, data });
export const postMethod = ({ url, params, data }) => request({ url, method: 'POST', params, data });
export const putMethod = ({ url, params, data }) => request({ url, method: 'PUT', params, data });
export const deleteMethod = ({ url, params, data }) =>
  request({ url, method: 'DELETE', params, data });
