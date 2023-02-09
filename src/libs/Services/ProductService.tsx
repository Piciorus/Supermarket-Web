// import apiClient from "../Interceptors/auth-interceptor"

import apiClient from "../Interceptors/AuthInterceptor"

export const ProductService = {
    constructor() {},

    addProductToSupermarket(id:number){
        apiClient.post(`/addProductToSupermarket/${id}`)
    },

    deleteProductFromSupermarket(id:number){
        apiClient.delete(`/deleteProductFromSupermarket/${id}`)
    },

    getAllProductsFromSupermarket(id:number){
        apiClient.get(`/getAllProductsFromSupermarket/${id}`)
    },

    updateProductFromSupermarket(id:number){
        apiClient.put(`/updateProductFromSupermarket/${id}`)
    },

    getProductById(id:number){
        apiClient.get(`/getProductById/${id}`)
    }

}