'use client'

import { CartProduct, cartProducts } from "@/atoms/cart.atom"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useAtom } from "jotai"
import { MinusIcon, PlusIcon, ShoppingBasketIcon, ShoppingCartIcon, TrashIcon, WalletIcon } from "lucide-react"
import toast from "react-hot-toast"
import { Badge } from "./ui/badge"

export function CartPopover() {
  const [cartItems, setCartItems] = useAtom(cartProducts)

  const handleRemoveFromCart = (productToRemove: CartProduct) => {
    setCartItems((prevState) => {
      if (productToRemove.quantity && productToRemove.quantity === 1) {
        toast.success('Product has been removed from cart!', {
          icon: <ShoppingBasketIcon />
        })

        return prevState.filter(p => {
          return p.id !== productToRemove.id;
        })
      }

      const updatedData = prevState.map(item => {
        if (item.id === productToRemove.id) {
          return { ...item, quantity: item.quantity! - 1 };
        }
        return item
      });
  
      return updatedData
    })
  }

  const handleAddToCart = (productToAdd: CartProduct) => {
    setCartItems(prevState => {
      const updatedData = prevState.map(item => {
        if (item.id === productToAdd.id) {
          return { ...item, quantity: item.quantity! + 1 };
        }
        return item
      });
  
      return updatedData
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size='icon' className="relative">
          <ShoppingCartIcon size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] rounded-2xl">
        <div className="grid gap-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h4 className="font-medium leading-none">Cart Items</h4>
              <Badge>{cartItems.length} products</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Continue shopping or remove products.
            </p>
          </div>
          <div className="grid gap-2">
            {cartItems.length === 0 ? (
              <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground border p-1 rounded-2xl">
                <ShoppingBasketIcon size={20} />
                Empty Cart
              </div>
            ) : cartItems?.map((product) => (
              <div key={product.id} className="flex w-full truncate items-center justify-between gap-4 border p-2 rounded-2xl">
                <div className="flex w-full truncate items-center gap-2">
                  <img src={product.image} alt="" className="w-8 h-8 rounded-full object-cover" />
                  <h3 className="w-full text-sm truncate">{product?.title}</h3>
                </div>
                <div className="flex gap-2 items-center justify-end">
                  <Button onClick={() => handleRemoveFromCart(product)} title="Remove from Cart" variant='outline' size='icon' className="w-6 h-6">
                    <MinusIcon size={18} className="p-0 text-white" />
                  </Button>
                  {product.quantity}
                  <Button onClick={() => handleAddToCart(product)} title="Remove from Cart" variant='outline' size='icon' className="w-6 h-6">
                    <PlusIcon size={18} className="p-0 text-white" />
                  </Button>
                  <Button title="Continue to Buy" variant='ghost' size='icon' className="w-8 h-8 bg-green-500 hover:bg-green-700">
                    <WalletIcon size={18} className="p-0 text-white" />
                  </Button>
                </div>
            </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
