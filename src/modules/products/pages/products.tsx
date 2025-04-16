import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../hooks/api/products"
import { Loader2 } from "lucide-react";
import { ProductCard } from "../components/card";

export const Products = () => {

  
    const { data, isLoading } = useQuery( getProducts());
     
     if(isLoading){
        return <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
     }

    return (
      <div className="flex flex-wrap gap-6 justify-center mt-4">
       {data?.map((product, i) => (
        <ProductCard
            key={i}
            title={product.title}
            image={product.image}
            price={product.price}
            
        />
        ))}
       

      </div>
    )
}