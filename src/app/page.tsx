'use client'

import { Header } from '@/components/header'
import { ProductDialog } from '@/components/product-dialog'
import { ProductCard } from '@/components/products-card'
import { ShortProductCard } from '@/components/short-products-card'
import { buttonVariants } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { productsController } from '@/controller/products-controller'
import { cn } from '@/lib/utils'
import { Product } from '@/model/products'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion';

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({} as Product)

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
    productsController.get({
      limit: 10,
    }),
  })

  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
    productsController.getCategories(),
  })

  const handleProduct = (product: Product) => {
    setSelectedProduct(product)
    setDialogOpen(!dialogOpen)
  }
  
  return (
    <div className="flex container min-h-screen flex-col items-center justify-between gap-8">
      <Header />

      <Separator />

      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
      <section className='flex items-start w-full h-full gap-2'>
        <div className='flex flex-col justify-between space-y-4'>
          <div>
            <h1 className='w-fit rounded-2xl text-8xl font-extrabold px-6 bg-slate-800'>NEW</h1>            
            <h1 className='w-fit rounded-2xl text-8xl font-extrabold px-6 bg-yellow-500'>ARRIVAL</h1>                        
          </div>
          <p className='text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium explicabo vitae dolorem voluptates cumque suscipit ea ex, tempora quibusdam, provident incidunt tenetur at fugit accusantium? Ea voluptas obcaecati hic sapiente.</p>

          <h3 className='text-4xl font-extrabold'>Monday, 29th November 2077</h3>

          <div className='flex gap-2'>
            <p className='font-bold text-muted-foreground'>@brunofilho1</p>
            <p className='font-bold text-muted-foreground'>@ecommerceexperience</p>
          </div>
        </div>

        <img src='/home-pic.jpg' alt="Home Pic" className='rounded-2xl border-r-8 border-b-4 border-b-yellow-600 border-r-yellow-700' />
      </section>
      </motion.div> */}

      <section className="flex flex-col gap-4 items-center">
        <h1 className='font-extrabold text-xl'>See Our Products</h1>
        <div className='flex flex-wrap justify-center gap-4 p-4 rounded-2xl'>
          {products?.map((product) => (
            <ProductCard onClick={() => handleProduct(product)} key={product.id} product={product} />
          ))}
        </div>
      </section>

      <Separator />

      {/* {categories?.slice(0, 2).map((category) => (
        <section key={category} className='flex flex-col p-4 gap-4 w-full'>
          <h1 className='font-extrabold text-xl'>— {category.toUpperCase()}</h1>
          <div className='flex gap-4 overflow-x-scroll bg-slate-900 p-4 rounded-2xl'>
            {products?.map((product) => (
              <ShortProductCard onClick={() => handleProduct(product)} key={product.id} product={product} />
            ))}
          </div>

          <Link href={`/category/${category}`}
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'w-[200px]')}
          >
            See All Products
          </Link> 
        </section>  
      ))}   */}

      <footer
        className="flex w-full flex-col items-center bg-gray-900 text-center text-white rounded-t-2xl">
        <div className="container pt-9">
          <div className="mb-9 flex justify-center">
            <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#!" className="mr-9 text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="#!" className="text-neutral-800 dark:text-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
        <div
          className="w-full bg-gray-800 p-4 text-center ">
          © 2023 Copyright: 
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://github.com/brunofilho1"
            target='_blank'
            > Bruno Filho</a>
        </div>
      </footer>

      <ProductDialog 
        isOpen={dialogOpen} 
        onOpenChange={setDialogOpen} 
        product={selectedProduct} 
      />
    </div>
  )
}
