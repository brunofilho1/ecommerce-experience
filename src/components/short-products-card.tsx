/* eslint-disable @next/next/no-img-element */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@/model/products"

interface ProductCardProps {
  product: Product
  onClick: () => void
}

export function ShortProductCard({ product, onClick }: ProductCardProps) {
  return (
    <Card onClick={onClick} className="flex flex-col border w-full justify-between bg-accent hover:bg-background transition-all cursor-pointer rounded-2xl">
      <CardHeader className="pb-0">
        <CardTitle title={product.title} className="text-sm">{product.title.substring(0, 20)}...</CardTitle>        
      </CardHeader>
      <CardContent className="w-[200px] h-[200px] items-center flex">        
        <img 
          src={product.image} 
          alt="Product Image" 
          className="rounded-2xl object-cover w-[100px] h-[100px] m-auto" />
      </CardContent>
      <CardFooter className="text-emerald-700 justify-end">
        ${product.price}
      </CardFooter>
    </Card>
  )
}