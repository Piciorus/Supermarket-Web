import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { AuthService } from "../Auth/AuthService";
// import { AuthService } from "../autentificarea/AuthService";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 100000,
});

export default apiClient;

apiClient.interceptors.response.use(
  (response: any) => response,
  (error: { response: { status: number }; message: any }) => {
    if (error.response?.status === 401) {
      // this.authService.logout();
      console.log("logout");
    }
    if (error.response?.status === 500) {
      return Promise.reject(error.message);
    }
    return Promise.reject(error);
  }
);

apiClient.interceptors.request.use(
  (config: any) => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const isLoogedIn = user.username;
    if (isLoogedIn) {
      config.headers.Authorization = "Basic " + user.authData;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);
