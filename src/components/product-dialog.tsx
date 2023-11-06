'use client'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { HeartIcon, ShoppingCartIcon } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import { Badge } from "./ui/badge"
import { Product } from "@/model/products"
import { useAtom } from "jotai"
import { CartProduct, cartProducts } from "@/atoms/cart.atom"
import toast from "react-hot-toast"

interface ProductDialogProps {
  isOpen: boolean
  onOpenChange: Dispatch<SetStateAction<boolean>>
  product: CartProduct
}

export function ProductDialog({ isOpen, onOpenChange, product }: ProductDialogProps) {
  const [cartItems, setCartItems] = useAtom(cartProducts)

  const handleAddToCart = () => {
    setCartItems(prevState => {
      const existingProduct = prevState.find(item => item.id === product?.id);

      toast.success('Product has been added to cart!')

      if (existingProduct) {
        const updatedData = prevState.map(item => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity! + 1 };
          }
          return item
        });
    
        return updatedData
      } else {
        const newItem: CartProduct = { ...product, quantity: 1 };
        return [...prevState, newItem];
      }
    });
  };

  if(!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="flex sm:max-w-[825px] rounded-2xl">
        <DialogHeader>
          <div className="flex items-start gap-2">
            <DialogTitle>{product?.title}</DialogTitle>
            <Badge className="w-fit text-center bg-slate-500">{product?.category?.toUpperCase()}</Badge>
          </div>
          <DialogDescription>
          {product?.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="w-[300px] h-[300px]">
            <img loading="lazy" src={product?.image} alt="" className="w-full h-full object-cover rounded-2xl hover:object-contain transition-all" />
          </div>

          <div className="w-full flex gap-2 justify-between">
            <Button type="button" className="space-x-2 bg-red-500 text-white">
              <HeartIcon />            
            </Button>
            
            <Button onClick={handleAddToCart} type="button" className="space-x-2">
              <ShoppingCartIcon />
              <span>Add to Cart</span>
              {`(${cartItems?.find((p) => p.id === product.id)?.quantity || 0})`}
            </Button>
          </div>
        </div>

        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  )
}
