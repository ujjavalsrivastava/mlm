import { default as createAxios } from "axios";

const axios = createAxios.create({
  baseURL: `http://localhost:3000/api`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  withCredentials: true,
  timeout: 10000,
});

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Get the token from local storage or state
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const httpFileAxios = createAxios.create({
  baseURL: `http://localhost:3000/api`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
  timeout: 10000,
});

httpFileAxios.interceptors.request.use(
  (config) => {
    // Get the token from local storage or state
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axios, httpFileAxios };
