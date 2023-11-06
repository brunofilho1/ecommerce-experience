'use client'

import { cartProducts } from "@/atoms/cart.atom"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useAtom } from "jotai"
import { ShoppingBasketIcon, ShoppingCartIcon, TrashIcon, WalletIcon } from "lucide-react"

export function CartPopover() {
  const [cartItems] = useAtom(cartProducts)

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size='icon'>
          <ShoppingCartIcon size={20} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 rounded-2xl">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Cart Items</h4>
            <p className="text-sm text-muted-foreground">
              Continue shopping or remove products.
            </p>
          </div>
          <div className="grid gap-2">
            {!cartItems ? (
              <div className="flex items-center gap-2 justify-center text-sm text-muted-foreground border p-1 rounded-2xl">
                <ShoppingBasketIcon size={20} />
                Empty Cart
              </div>
            ) : cartItems?.map((product) => (
              <div key={product.id} className="flex items-center justify-between gap-4 border p-2 rounded-2xl">
                <div className="flex items-center gap-2">
                  <img src={product.image} alt="" className="w-8 rounded-full" />
                  <h3 className="truncate text-sm">{product?.title}</h3>
                </div>
                <div className="flex gap-2 items-center">
                  <Button title="Remove from Cart" variant='ghost' size='icon' className="w-8 h-8 bg-red-500 hover:bg-red-700">
                    <TrashIcon size={18} className="p-0 text-white" />
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
