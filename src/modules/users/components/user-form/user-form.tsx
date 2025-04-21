import { z } from "zod";
import {FormProvider, SubmitHandler, useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import { UserFormValues } from "./user-form-values";
import { useCreateUser, useUpdateUser } from "../../hooks/api/users";
import { useLocation } from "react-router-dom";

const userSchema = z.object({
 id : z.number().optional(),
 name:z.string(),
 email:z.string(),
 role:z.string(),
 avatar:z.string().optional(),
})

export type UserSchema = z.infer<typeof userSchema>


export const UserForm = ({defaultValues}:{defaultValues?:UserSchema})=> {
 console.log("meowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
  const location = useLocation()
  const create = location.pathname.includes("create")

  const {mutate: updateUser} = useUpdateUser()
  const {mutate: createUser} = useCreateUser()

   const form = useForm({
  resolver:zodResolver(userSchema),
  defaultValues,
  })
  const {handleSubmit} = form

 const onSubmit: SubmitHandler<UserSchema>= (data)=> {
  console.log("data",data)
 if(create){
   createUser(data)
 }else{
  updateUser(data)
 }
  }

    return(
      <FormProvider {...form}>    
<form onSubmit={handleSubmit(onSubmit, (errors) => console.log("errors", errors))}>
<UserFormValues/>
     </form>
     </FormProvider>
    )
}