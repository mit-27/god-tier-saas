"use client";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {api} from '../lib/api-client'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import posthog from 'posthog-js'
import { PostHogProvider, usePostHog } from 'posthog-js/react'
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const queryClient = new QueryClient()

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

export function Providers({ children }: { children: React.ReactNode }) {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  useEffect(() => {
    // Track pageviews
    if (pathname && posthog) {
      let url = window.origin + pathname
      if (searchParams.toString()) {
        url = url + `?${searchParams.toString()}`
      }
      posthog.capture(
        '$pageview',
        {
          '$current_url': url,
        }
      )
    }
  }, [pathname, searchParams, posthog])


  return (
    <PostHogProvider client={posthog}>
      <QueryClientProvider client={queryClient}>
        <api.ReactQueryProvider>
          {children}    
        </api.ReactQueryProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </PostHogProvider>
    
  );
}