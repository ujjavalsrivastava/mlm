import * as createAxios from "axios";

const axios = createAxios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  headers: {
    "Content-Type": "application/json",
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
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`,
  headers: {
    "Content-Type": "multipart/form-data",
  },
  withCredentials: true,
  timeout: 10000,
});

export { axios, httpFileAxios };
