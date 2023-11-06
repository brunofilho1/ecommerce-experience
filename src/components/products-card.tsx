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
    <Card className="w-[340px] flex flex-col justify-between hover:bg-accent transition-all cursor-pointer rounded-2xl">
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>        
      </CardHeader>
      <CardContent className="flex items-center w-full">
        <Image width={200} height={200} src={product.image} alt="Product Image" className="rounded-2xl m-auto" />
      </CardContent>
      <CardFooter className="text-emerald-700 justify-end">
        ${product.price}
      </CardFooter>
    </Card>
  )
}