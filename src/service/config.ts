import { store } from '@store/store';
import axios from 'axios';

const state = store.getState();
const internalURL = state.appConfig.internalURL;
const externalURL = state.appConfig.externalURL;
const apiKey = state.appConfig.externalApiKey;

export const getRequest = (type: 'internal' | 'external', endpoint: string, params = null) => {
  const url = type === 'internal' ? internalURL : externalURL;
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}${endpoint}`, {
        params: Object.assign({}, params, {
          api_key: apiKey,
          language: 'tr-TR',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export const postRequest = (
  type: 'internal' | 'external',
  endpoint: string,
  body = null,
  params = {}
) => {
  const url = type === 'internal' ? internalURL : externalURL;
  return new Promise((resolve, reject) => {
    axios
      .post(`${url}${endpoint}`, body, {
        params: Object.assign({}, params, {
          api_key: apiKey,
          language: 'tr-TR',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export const deleteRequest = (type: 'internal' | 'external', endpoint: string, params = null) => {
  const url = type === 'internal' ? internalURL : externalURL;
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}${endpoint}`, {
        params: Object.assign({}, params, {
          api_key: apiKey,
          language: 'tr-TR',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export const putRequest = (
  type: 'internal' | 'external',
  endpoint: string,
  body = null,
  params = null
) => {
  const url = type === 'internal' ? internalURL : externalURL;
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}${endpoint}`, {
        params: Object.assign({}, params, {
          api_key: apiKey,
          language: 'tr-TR',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};
