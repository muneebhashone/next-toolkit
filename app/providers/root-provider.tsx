"use client"

import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

  const RootProvider = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient()

    return (
      // Provide the client to your App
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
  }

  export default RootProvider