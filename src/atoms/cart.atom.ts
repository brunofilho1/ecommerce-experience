import { Product } from '@/model/products'
import { atom } from 'jotai'

export interface CartProduct extends Product {
  quantity?: number;
}

export const cartProducts = atom<CartProduct[]>([])
