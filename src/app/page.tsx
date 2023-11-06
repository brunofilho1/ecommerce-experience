'use client'

import { Header } from '@/components/header'
import { ProductDialog } from '@/components/product-dialog'
import { ProductCard } from '@/components/products-card'
import { Separator } from '@/components/ui/separator'
import { productsController } from '@/controller/products-controller'
import { Product } from '@/model/products'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { motion } from 'framer-motion';
import Footer from '@/components/footer'

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

      <Footer />

      <ProductDialog 
        isOpen={dialogOpen} 
        onOpenChange={setDialogOpen} 
        product={selectedProduct} 
      />
    </div>
  )
}
