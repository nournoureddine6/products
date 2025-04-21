import { useQuery } from "@tanstack/react-query"
import { userQueries } from "../hooks/api/users"
import { Loader2 } from "lucide-react";
import { ProductCard } from "../components/card";

export const Products = () => {

  
    const { data, isLoading } = useQuery(userQueries.getUsers);
     
     if(isLoading){
        return <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
     }

    return (
      <div className="flex flex-wrap gap-6 justify-center mt-4">
       {data?.map((user, i) => (
        <ProductCard user={user} />
        ))}
       

      </div>
    )
}