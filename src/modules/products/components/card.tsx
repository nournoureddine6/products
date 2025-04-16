import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Product } from "../hooks/api/products";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';


export const ProductCard = ({ title, image, price, description }: Omit<Product, "id">) => {
  return (
    <Card className="w-80 mt-8">
      <CardHeader>
        <h3 className="text-lg font-semibold">{title}</h3>
      </CardHeader>
      <CardContent>
        <img src={image} alt={title} className="w-full h-48 object-cover rounded" />
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        <p className="mt-2 font-bold text-primary">Price: ${price}</p>
        <Button> 
          <ShoppingCart/>
          Add To Cart</Button>
      </CardContent>
    </Card>
  );
};