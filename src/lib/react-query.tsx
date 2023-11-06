import { QueryCache, QueryClient } from '@tanstack/react-query'
import { toast } from 'react-hot-toast'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (_error, query) => {
      if (query?.meta?.errorMessage) {
        return toast.error(`${query.meta.errorMessage}`)
      }
    },
  }),

  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 min
      refetchOnWindowFocus: false,
    },
  },
})
