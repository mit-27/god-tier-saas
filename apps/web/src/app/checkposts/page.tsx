"use client";

import { api } from "@/lib/api-client";



const CheckPosts = () => {

  const {data,isLoading,isError} = api.posts.getPosts.useQuery({
    queryKey: ['posts'],
    retryOnMount: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });

  return (
    <div>
      {isLoading ? 'Loading...' : JSON.stringify(data?.body)}
    </div>
  )
}

export default CheckPosts