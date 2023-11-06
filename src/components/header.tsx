"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { HeartIcon, ShoppingCartIcon, StoreIcon } from "lucide-react"
import { UserNav } from "./user-nav"
import { useQuery } from "@tanstack/react-query"
import { productsController } from "@/controller/products-controller"
import { Button } from "./ui/button"
import { CartPopover } from "./cart-popover"

export function Header() {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: () =>
    productsController.getCategories(),
  })

  return (
    <header className="w-full h-16 items-center justify-between font-mono text-sm lg:flex px-4 rounded-b-2xl">
      <Link href='/' className='font-bold text-xl flex items-center gap-2'>
        <StoreIcon size={20} />
        E-commerce
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        E-commerce Experience
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed e-commerce page built with React.js, Next.js, Radix UI (Shadcn/UI),
                        Tailwind CSS and more.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {categories?.map((category) => (
                  <ListItem
                    key={category}
                    title={category.toUpperCase()}
                    href={`/category/${category}`}
                  >
                    See all products related to {category} category
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex space-x-2 items-center">
        <Button variant='ghost' size='icon'>
          <HeartIcon size={20} />
        </Button>

        <CartPopover />

        <UserNav />
      </div>
    </header>    
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
