import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Mail, Phone, SendHorizontal, Share2 } from 'lucide-react';
import { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { BackSVG } from './svg';
import { Input } from '@/components/ui/input';


export const PopOver = () => {
    const [showCard,setShowCard] = useState("email")
    return (
        <Popover>
        <PopoverTrigger asChild>
        <Button className="rounded-lg bg-amber-800">
            <Share2 className="text-blue-600"/>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[600px] bg-transparent border-none p-0 shadow-none h-auto max-h-[90vh] overflow-auto">
  <div className="flex flex-row border-0 bg-white w-[200px] gap-2 mb-5 h-[50px] justify-center items-center ml-40">
    <Button className="rounded-lg border border-outline-700">
      <Phone className="text-green-600" />
    </Button>
    <Button>
      <Mail className="text-blue-500" />
    </Button>
  </div>

  <BackSVG >
    <Card className="w-full bg-transparent min-h-[700px]">
      <CardHeader className="flex flex-row items-center space-x-4">
        <CardTitle className="text-lg">Share Link To Email:</CardTitle>
        <Button variant="outline">
          <SendHorizontal className="text-blue-500" />
        </Button>
        <span>. . . . . . .</span>
        <Button>
          <Phone className="text-blue-500" />
        </Button>
      </CardHeader>

      <CardContent>
        <div className="bg-white h-[300px] rounded-lg flex flex-row p-4">
          <span>User Name or Phone: </span>
          <Input className="w-[80%]" />
        </div>
        <div className="mt-10">hii</div>
        <div className="h-[400px] bg-gray-100 mt-4">Extra content to test height</div>
      </CardContent>
    </Card>
  </BackSVG>
</PopoverContent>


      </Popover>
    )
}
















