import { Product } from '@/model/products'
import { atom } from 'jotai'

export const cartProducts = atom<Product[] | null>([])
