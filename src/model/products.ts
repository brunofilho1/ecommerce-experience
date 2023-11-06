export interface Product {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

export type Categories = "electronics" | "jewelery" | "men's clothing" | "women's clothing"
  