"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/lib/api-client";
import { useEffect } from "react";

const Home = () => {

  // const fetchPosts = tsrQueryClient.posts.getPosts;
  
  const {data,isLoading,isError} = api.posts.getPosts.useQuery(['posts']);

  console.log(data);

 



  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Button>Hello</Button>
      <p>{isLoading ? 'Loading...' : JSON.stringify(data?.body?.length)}</p>

    </div>
  );
}

export default Home;