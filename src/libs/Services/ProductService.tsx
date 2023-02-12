// import apiClient from "../Interceptors/auth-interceptor"

import apiClient from "../Interceptors/AuthInterceptor"

export const ProductService = {
    constructor() {},

    addProductToSupermarket(id:number){
        return apiClient.post(`/addProductToSupermarket/${id}`)
    },

    deleteProductFromSupermarket(id:number){
        return apiClient.delete(`/deleteProductFromSupermarket/${id}`)
    },

    getAllProductsFromSupermarket(id:number){
        return apiClient.get(`/getAllProductsFromSupermarket/${id}`)
    },

    updateProductFromSupermarket(id:number){
        return apiClient.put(`/updateProductFromSupermarket/${id}`)
    },

    getProductById(id:number){
        return apiClient.get(`/getProductById/${id}`)
    },

    getAllProducts(){
        return apiClient.get(`/getAllProducts`)
    }

}