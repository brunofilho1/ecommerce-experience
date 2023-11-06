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
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="max-w-[200px] max-h-[300px] flex flex-col justify-between hover:bg-accent transition-all cursor-pointer rounded-2xl">
      <CardHeader>
        <CardTitle title={product.title}>{product.title.substring(0, 20)}...</CardTitle>        
      </CardHeader>
      <CardContent className="flex items-center">
        <img src={product.image} alt="Product Image" className="rounded-2xl m-auto object-cover h-[120px] w-full" />
      </CardContent>
      <CardFooter className="text-emerald-700 justify-end">
        ${product.price}
      </CardFooter>
    </Card>
  )
}