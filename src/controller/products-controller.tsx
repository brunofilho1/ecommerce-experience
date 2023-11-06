import { Categories, Product } from "@/model/products"

interface GetProductsProps {
  limit?: number
  category?: Categories
}

async function get({ limit = 5 }: GetProductsProps) {
  const response: Product[] = await fetch(`https://fakestoreapi.com/products?limit=${limit}`)
  .then(res=>res.json())

  return response
}

async function getByCategory({ category = "men's clothing" }: GetProductsProps) {
  const response: Product[] = await fetch(`https://fakestoreapi.com/products/category/${category}`)
  .then(res=>res.json())

  return response
}

async function getById({ id }: { id: number }) {
  const response: Product[] = await fetch(`https://fakestoreapi.com/products/${id}`)
  .then(res=>res.json())

  return response
}

async function getCategories() {
  const response: Categories[] = await fetch('https://fakestoreapi.com/products/categories')
  .then(res=>res.json())

  return response
}

export const productsController = { get, getById, getByCategory, getCategories }