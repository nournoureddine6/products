import { queryOptions, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
export type User={
  id: number;
  name: string;
  email: string;
  avatar: string;
  password: string;
  role: string;

}
export const userQueries = {
  getUsers: queryOptions ({
    queryKey:["users"],
    queryFn : async()=> {
      const res = await axios.get("https://api.escuelajs.co/api/v1/users")
      return res.data
    }
  }),
  getUser :(params: Pick<User,"id">)=>
   queryOptions({
  queryKey: ["users",params],
  queryFn: async(): Promise<User> =>{
 const res = await axios.get(`https://api.escuelajs.co/api/v1/users/${params.id}`)
    return res.data
  }
  
    })

}


export const  useUpdateUser = () => {
  const queryClient = useQueryClient()
 return useMutation({
  mutationKey: ["users"],
  mutationFn: async(params: User): Promise<User>=> {
    const res = await axios.put(`https://api.escuelajs.co/api/v1/users/${params.id}`,{params})
    return res.data
  },
  onSuccess:  ()=> {
queryClient.invalidateQueries({
    queryKey:["users"]
 })
}
})
}

export const useCreateUser = () => {
  return useMutation({
    mutationKey:["users"],
    mutationFn : async(params : User): Promise<User> => {
     const res = await axios.post("https://api.escuelajs.co/api/v1/users", {params})
     return res.data
    }
  })
}


