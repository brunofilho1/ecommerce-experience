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
  onClick: () => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <Card onClick={onClick} className="max-w-[200px] max-h-[300px] flex flex-col justify-between bg-accent hover:bg-slate-700 transition-all cursor-pointer rounded-2xl">
      <CardContent className="mt-4">
        <img src={product.image} alt="Product Image" className="rounded-2xl m-auto object-contain max-h-[120px] h-full w-full" />
      </CardContent>
      <CardHeader>
        <CardTitle title={product.title}>{product.title.substring(0, 20)}...</CardTitle>        
      </CardHeader>
      <CardFooter className="text-emerald-700 justify-end">
        ${product.price}
      </CardFooter>
    </Card>
  )
}