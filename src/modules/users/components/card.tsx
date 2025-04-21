import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "../hooks/api/users";
import { useNavigate } from "react-router-dom";




export const ProductCard = ({user}: {user:User}) => {
   const navigate = useNavigate()

   return (
    <Card className="w-80 mt-8">
      <CardHeader>
        <h3 className="text-lg font-semibold">{user.name}</h3>
      </CardHeader>
      <CardContent>
        <img src={user.avatar} alt="" className="w-full h-48 object-cover rounded" />
        <p className="mt-2 text-sm text-muted-foreground">{user.role}</p>
  
        <Button className="text-black" onClick={()=>navigate(`${user.id}`) }>Edit</Button>
      </CardContent>
    </Card>
  );
};