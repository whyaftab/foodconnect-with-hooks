import Axios from "axios";

Axios.interceptors.request.use(
  function (config) {
    config.baseURL = "https://www.foodkonnekt.com/admin/";
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
