// import apiClient from "../Interceptors/auth-interceptor"

import apiClient from "../Interceptors/AuthInterceptor";
import { Product } from "../Model/Product";

export const ProductService = {
  constructor() {},

  addProduct(product: Product) {
    return apiClient.post(`/addProduct`, {
      name: product.name,
      category: product.category,
      brand: product.brand,
      expirationDate: product.expirationDate,
      price: product.price,
    });
  },

  addProductToSupermarket(id: string) {
    return apiClient.post(`/addProductToSupermarket/${id}`);
  },

  deleteProductFromSupermarket(id: string) {
    return apiClient.delete(`/deleteProductFromSupermarket/${id}`);
  },

  getAllProductsFromSupermarket(id: number) {
    return apiClient.get(`/getAllProductsFromSupermarket/${id}`);
  },

  updateProductFromSupermarket(id: string) {
    return apiClient.put(`/updateProductPrice/${id}`);
  },

  getProductById(id: number) {
    return apiClient.get(`/getProductById/${id}`);
  },

  getAllProducts() {
    return apiClient.get(`/getAllProducts`);
  },
};
