import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors
    if (error.response?.status === 401) {
      console.error("Unauthorized. Redirecting to login.");
    }
    return Promise.reject(error);
  }
);

export default axios;
