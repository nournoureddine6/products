import { useParams } from "react-router-dom"
import { userQueries } from "../hooks/api/users"
import { useQuery } from "@tanstack/react-query"
import { UserForm } from "../components/user-form/user-form"

export const EditUser =  () => {

    const {id} = useParams()
    const userId =  Number(id)
    const {data:user,isFetching,isPending} = useQuery({...userQueries.getUser({id:userId} ), 
        enabled: !!(userId),
      })
      
  if (isPending || isFetching) return <p>Loading user...</p>;


    return (
       <UserForm defaultValues={user}/>
    )
}