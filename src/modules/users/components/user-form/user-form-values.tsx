import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { UserSchema } from "./user-form"
import { useFormContext } from "react-hook-form"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const UserFormValues = () => {
   const {getValues} = useFormContext<UserSchema>()
   const userName =  getValues("name")


     return (
      <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>{userName} Info</CardTitle>
      </CardHeader>
      <CardContent className="m-4">
  <div className="flex gap-6">
    <div className="flex-shrink-0">
      <AvatarField />
    </div>

    <div className="flex flex-col gap-4 w-full">
      <NameField />
      <EmailField />
      <RoleField />
    </div>
  </div>
</CardContent>
<CardFooter className="flex justify-center">
   <Button variant="outline" type="submit">Save</Button>
     </CardFooter>
    </Card>
    )
}

const AvatarField = () => {
  const {control} = useFormContext<UserSchema>()

  return (
    <FormField
    control={control}
    name="avatar"
    render={({field})=> (
    <FormItem>
    <FormControl>
    <img src={field.value} alt="" className="rounded-lg w-[150px]"/>
    </FormControl>
    <FormMessage />
    </FormItem>
    )}
    
    />
  )
}

const NameField = () => {
  const {control} = useFormContext<UserSchema>()

  return (
    <FormField
    control={control}
    name="name"
    render={({field})=> (
    <FormItem>
    <FormLabel>Username</FormLabel>
    <FormControl>
    <Input placeholder="Username" {...field} value={field.value} />
    </FormControl>
    <FormMessage />
    </FormItem>
    )}
    
    />
  )
}

const EmailField = () => {
  const {control} = useFormContext<UserSchema>()

  return (
    <FormField
    control={control}
    name="email"
    render={({field})=> (
    <FormItem>
    <FormLabel>Email</FormLabel>
    <FormControl>
    <Input placeholder="Email" {...field} value={field.value} />
    </FormControl>
    <FormMessage />
    </FormItem>
    )}
    
    />
  )
}

const RoleField = () => {
  const {control} = useFormContext<UserSchema>()

  return (
    <FormField
    control={control}
    name="role"
    render={({field})=> (
    <FormItem>
    <FormLabel>Role</FormLabel>
    <FormControl>
    <Input placeholder="Role" {...field} value={field.value} />
    </FormControl>
    <FormMessage />
    </FormItem>
    )}
    
    />
  )
}