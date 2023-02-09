import apiClient from "../Interceptors/AuthInterceptor"

export const SupermarketService = {

  constructor() {},

  createSupermarket(name: string, address: string) {
    return apiClient.post('/createSupermarket', { name, address});
  },

  getAllSupermarkets() {
    return apiClient.get('/getAllSupermarkets');
  },

  getSupermarketById(id: number) {
    return apiClient.get(`/getSupermarketById/${id}`);
  },

  deleteSupermarketById(id: number) {
    return apiClient.delete(`/deleteSupermarketById/${id}`);
  },

  updateSupermarketById(id: number){
    return apiClient.put(`/updateSupermarketById/${id}`);
  }

};
