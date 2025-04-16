import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

export interface Product {
    id: number;
    title: string;
    price: number;
    description?: string;
    image: string; 
  }
  
  export type Products = Product[]; 
  

export const getProducts = () => {
   return queryOptions({
        queryKey:["products"],
        queryFn : async (): Promise<Products> => {
            const res = await axios.get("https://fakestoreapi.com/products")
            return res.data
        }

    })

}

export const getProduct =(params : Product) =>{
    return queryOptions({
      queryKey:["products",params],
    queryFn:async ({signal}): Promise<Product> => {
     const {id} = params
      const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`,{signal});
      return res.data;
    }
})
}