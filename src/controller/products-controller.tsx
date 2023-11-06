import { Product } from "@/model/products"

async function get() {
  const response: Product[] = await fetch('https://fakestoreapi.com/products?limit=5')
  .then(res=>res.json())

  return response
}

export const productsController = { get }