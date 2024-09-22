"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {api} from './api-client'
// import {QueryClient,QueryClientProvider} from '@ts-rest/react-query/tanstack'
import React from 'react';

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
     <api.ReactQueryProvider>
      {children}    
     </api.ReactQueryProvider>
    </QueryClientProvider>
  );
}