"use client";
import Posts from "@/components/posts";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api-client";
import { dehydrate, HydrationBoundary, QueryClient} from '@tanstack/react-query';


export default async function Home() {

  const tsrQueryClient = api.initQueryClient(new QueryClient()); // <-- or pass a QueryClient from anywhere depending on your needs

  await tsrQueryClient.posts.getPosts.prefetchQuery({ queryKey: ['posts'] });



  // const {data,isLoading,isError} = api.posts.getPosts.useQuery({
  //   queryKey: ['posts'],
  //   retryOnMount: false,
  //   refetchOnMount: false,
  //   refetchOnWindowFocus: false
  // });

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <HydrationBoundary state={dehydrate(tsrQueryClient)}>
        <Posts/>
      </HydrationBoundary>
      {/* <Button>Hello</Button> */}
      {/* <p>{isLoading ? 'Loading...' : JSON.stringify(data?.body)}</p> */}

    </div>
  );
}
