import axios from "axios";
import apiClient from "../Interceptors/AuthInterceptor"

export const UserService = {

  constructor() {},

  getAllUsers() {
    return apiClient.get('/getAllUsers');
  },

  getUserById(id: string) {
    return apiClient.get(`/getUserById/${id}`);
  },

  deleteUserById(id: number) {
    return apiClient.delete(`/deleteUserById/${id}`);
  }
};
