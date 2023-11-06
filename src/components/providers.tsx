'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { Provider as ProviderJotai } from 'jotai'
import { Toaster } from 'react-hot-toast'

import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ProviderJotai>
        <ThemeProvider enableSystem={true} attribute="class" defaultTheme='dark'>
          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={12}
            toastOptions={{
              className:
                'p-6 bg-gray-100 dark:bg-zinc-800 dark:text-gray-100 dark:border-white/10 border-r',
              duration: 4000,
            }}
          />{children}
        </ThemeProvider>
      </ProviderJotai>
    </QueryClientProvider>
  )
}
